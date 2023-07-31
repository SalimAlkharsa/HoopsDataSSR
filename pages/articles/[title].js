import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import style from "../../styles/markdown-styles.module.css"; // Update the path to your CSS module
import server_link from "../../server_link"; // Update the path to your server_link file
import Navbar from "../../components/Navbar";

const ArticlePage = ({ article }) => {
  const articleData = article[0];

  return (
    <>
      <Navbar />
      <Helmet>
        {/* Set title, description, and image based on article data FaceBook*/}
        {/* ... Helmet code ... */}
      </Helmet>

      <div className="default">
        <div className="Article">
          <img
            className="cover"
            src={articleData.imgLink}
            alt={"Picture for " + articleData.Title}
          />
          <div className="title">{articleData.Title}</div>
          <div className="extraInfo">By: {articleData["Written By"]}</div>
          <div className="extraInfo">
            Date: {new Date(articleData.Date["$date"]).toISOString().substring(0, 10)}
          </div>

          <body className="body-art">
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
