import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Link from "next/link"; // Import Link from Next.js
import server_link from "../../server_link"; // Update the path to your server_link file
import styles from "../../styles/Display.module.css"; // Update the path to your CSS module

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log("useEffect ran");
    function getArticles() {
      fetch(server_link + "/Articles/%20")
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
      <Helmet>
        {/* Set title, description, and image based on article data FaceBook*/}
        <title>{"All Articles"}</title>
        <meta property="og:title" content={"HoopsData Sports Through Data"} />
        <meta
          property="og:description"
          content={"Sports and NBA done through analytics and data"}
        />
        <meta property="og:image" content={"%PUBLIC_URL%/Hoops Data.png"} />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Hoops.dataa" />
        <meta name="twitter:title" content={"HoopsData Sports Through Data"} />
        <meta
          name="twitter:description"
          content={"HoopsData Sports Through Data"}
        />
        <meta name="twitter:image" content={"%PUBLIC_URL%/Hoops Data.png"} />
      </Helmet>
      <div className={styles["grid-container"]}>
        {articles.map((article, index) => {
          return (
            <Link
              href={`/articles/${encodeURIComponent(article.Title)}`}
              key={index}
            >
              <div className={styles["grid-item"]}> {/* Use <a> tag for client-side navigation */}
                <img src={article.imgLink} alt="test pic" className={styles["pic"]} />
                <div className={styles["article-title"]}> {article.Title} </div>
                <div className={styles["article-detail"]}>
                  <div>By: {article["Written By"]}</div>
                  <div>Date: {String(article.Date["$date"]).substring(0, 10)} </div>
                </div>
                <div className={styles["article-desc"]}> {article.Description} </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllArticles;
