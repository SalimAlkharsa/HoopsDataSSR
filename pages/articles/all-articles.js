import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link"; // Import Link from Next.js
import server_link from "../../server_link"; // Update the path to your server_link file
import styles from "../../styles/Grid.module.css"; // Update the path to your CSS module

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
      <Head>
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
      </Head>
      <div className={styles.gridcontainer}>
        {""}
        {articles.map((article, index) => {
          return (
            <Link
              div className={styles.griditem}
              href={`/articles/${encodeURIComponent(article.Title)}`}
              key={index}
            >
                <img src={article.imgLink} alt="test pic" className={styles.pic} />
                <div className={styles.articletitle}> {article.Title} </div>
                <div className={styles.articledetail}>
                  <div>By: {article["Written By"]}</div>
                  <div>Date: {String(article.Date["$date"]).substring(0, 10)} </div>
                </div>
                <div className={styles.articledesc}> {article.Description} </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllArticles;
