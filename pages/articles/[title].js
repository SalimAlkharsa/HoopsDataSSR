import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import style from "../../styles/markdown-styles.module.css"; // Update the path to your CSS module
import server_link from "../../server_link"; // Update the path to your server_link file
import Navbar from "../../components/Navbar";
import articlestyle from "../../styles/Article.module.css";

const ArticlePage = ({ article }) => {
  const articleData = article[0];

  return (
    <>
      <Helmet>
        {/* Set title, description, and image based on article data FaceBook*/}
        
        <title>{articleData ? articleData.Title +" - HoopsData" : "HoopsData"}</title>
        <meta property="og:title" content={articleData ? articleData.Title : "HoopsData"} />
        <meta property="og:description" content={articleData ? articleData.Description : "HoopsData"} />
        <meta property="og:image" content={articleData ? articleData.imgLink : "HoopsData"} />

        {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Hoops.dataa" />
      <meta name="twitter:title" content={articleData ? articleData.Title : "HoopsData"} />
      <meta name="twitter:description" content={articleData ? articleData.Description : "HoopsData"} />
      <meta name="twitter:image" content={articleData ? articleData.imgLink : "HoopsData"} />
      </Helmet>

      <div className={articlestyle.default}>
        <div className={articlestyle.Article}>
          <div className={articlestyle.cover}>
            <img
              className={articlestyle.cover}
            src={articleData.imgLink}
            alt={"Picture for " + articleData.Title}
            />
            </div>
          <div className={articlestyle.title}>{articleData.Title}</div>
          <div className={articlestyle.extraInfo}>By: {articleData["Written By"]}</div>
          <div className={articlestyle.extraInfo}>
            Date: {new Date(articleData.Date["$date"]).toISOString().substring(0, 10)}
          </div>

          <body className={articlestyle.bodyart}>
            <ReactMarkdown className={style.reactMarkDown}>{articleData["Article-md"]}</ReactMarkdown>
          </body>

          <iframe
            title="Join the NL"
            src="https://embeds.beehiiv.com/698b1a3c-e41f-4334-a80e-a680a1d775a3"
            data-test-id="beehiiv-embed"
            frameBorder="0"
            scrolling="no"
            width="90%"
            height="300px"
            className="BeehivePromptPage"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  // Fetch the specific article data based on the slug (params.title)
  const response = await fetch(server_link + "/Articles/" + params.title);
  const article = await response.json();

  return { props: { article } };
}

export default ArticlePage;
