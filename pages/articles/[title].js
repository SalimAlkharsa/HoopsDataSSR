import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import style from "../../styles/markdown-styles.module.css";
import server_link from "../../server_link";
import Navbar from "../../components/Navbar";

const ArticlePage = ({ article }) => {
  const router = useRouter();
  const articleData = article ? article[0] : null;

  // Handle the case when the article is not found
  if (!articleData) {
    return (
      <>
        <Helmet>
          <title>Article Not Found - HoopsData</title>
          <meta name="description" content="Article Not Found - HoopsData" />
        </Helmet>
        <div>
          <h1>Article Not Found</h1>
          <p>The article you are looking for could not be found.</p>
        </div>
      </>
    );
  }

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
            <ReactMarkdown className={style.reactMarkDown}>
              {articleData["Article-md"]}
            </ReactMarkdown>
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

export async function getStaticPaths() {
  try {
    // Fetch the slugs of all articles to generate paths for pre-rendering
    const response = await fetch(server_link + "/Articles/Slugs");
    const articles = await response.json();
    const paths = articles.map((article) => ({
      params: { title: article },
    }));

    return { paths, fallback: false }; // fallback: false means that other routes should 404
  } catch (error) {
    console.error("Error fetching article slugs:", error);
    return { paths: [], fallback: false }; // or you can return { notFound: true } for a 404 page
  }
}

export async function getStaticProps({ params }) {
  try {
    // Fetch the specific article data based on the slug (params.title)
    const response = await fetch(server_link + "/Articles/" + params.title);
    const article = await response.json();

    return { props: { article } };
  } catch (error) {
    console.error("Error fetching article data:", error);
    return { props: { article: null } }; // or you can return { notFound: true } for a 404 page
  }
}

export default ArticlePage;
