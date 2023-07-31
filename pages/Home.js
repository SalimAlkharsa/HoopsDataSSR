import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Link from "next/link"; // Import Link from Next.js
import server_link from "../server_link"; // Update the path to your server_link file
import styles from "../styles/Display.module.css"; // Update the path to your CSS module
import Navbar from "../components/Navbar";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log("useEffect ran");
    function getArticles() {
      fetch(server_link + "/Articles/Home")
        .then((res) => res.json())
        .then((articles) => {
          setArticles(Object.values(articles));
          console.log(Object.values(articles));
        });
    }
    getArticles();
  }, []);

  return (
    <div>
      <Navbar />
      <Helmet>
        {/* Set title, description, and image based on article data FaceBook*/}
        {/* ... Helmet code ... */}
      </Helmet>

      <div className={styles["grid-container"]}>
        {articles.map((article, index) => (
          <Link
            href={`/articles/${encodeURIComponent(article.Title)}`} // Set dynamic route for articles
            key={index}
          >
            <div href={`/articles/${encodeURIComponent(article.Title)}`}
              className={styles["grid-item"]}> {/* Use <a> tag for client-side navigation */}
              <img src={article.imgLink} alt="test pic" className={styles["pic"]} />
              <div className={styles["article-title"]}> {article.Title} </div>
              <div className={styles["article-detail"]}>
                <div>By: {article["Written By"]}</div>
                <div>Date: {String(article.Date["$date"]).substring(0, 10)} </div>
              </div>
              <div className={styles["article-desc"]}> {article.Description} </div>
            </div>
          </Link>
        ))}
        <Link href="/articles/ALL">
          <div className={styles["grid-item"]}> {/* Use <a> tag for client-side navigation */}
            <img src="https://i.imgur.com/Hu2nqNi.png" alt="test pic" className={styles["pic"]} />
            <div className={styles["article-title"]}> All Articles </div>
            <div className={styles["article-author"]}>
              <b>By:</b> HoopsData
            </div>
            <div className={styles["article-desc"]}>
              {" "}
              Click Here To See All Articles Ordered By Date{" "}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
