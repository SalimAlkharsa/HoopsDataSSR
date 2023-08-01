import { useEffect, useState } from "react";
import Head from "next/head";
import server_link from "../server_link"; // Update the path to your server_link file
import Navbar from "../components/Navbar";
import styles from "../styles/Grid.module.css";

const Newsletter = () => {
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    function getNewsletters() {
      fetch(server_link + "/Newsletter")
        .then((res) => res.json())
        .then((newsletters) => {
          setNewsletters(Object.values(newsletters));
          console.log(Object.values(newsletters));
        });
    }
    getNewsletters();
  }, []);

  return (
      <div>
        <Navbar />
      <Head>
        {/* Set title, description, and image based on article data FaceBook*/}
        <title>{"Newsletters - HoopsData"}</title>
        <meta property="og:title" content={"HoopsData Sports Through Data"} />
        <meta
          property="og:description"
          content={"Sports and NBA done through analytics and data"}
        />
        <meta property="og:image" content={"/Hoops Data.png"} />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Hoops.dataa" />
        <meta name="twitter:title" content={"HoopsData Sports Through Data"} />
        <meta
          name="twitter:description"
          content={"HoopsData Sports Through Data"}
        />
        <meta name="twitter:image" content={"/Hoops Data.png"} />
      </Head>
      <div className={styles.gridcontainer}>
        <div className={styles.griditem} style={{ background: "#ededed" }}>
          <iframe
            title="Join the NL"
            src="https://embeds.beehiiv.com/698b1a3c-e41f-4334-a80e-a680a1d775a3"
            data-test-id="beehiiv-embed"
            frameBorder="0"
            scrolling="no"
            width="100%"
            height="50%"
            className={styles.NewsLetterHome}
          ></iframe>
          <div style={{ background: "#ededed" }}>
            <div
              className={styles.articletitle}
              style={{ background: "#ededed" }}
            >
              {" "}
              Why Join the Newsletter{" "}
            </div>
            <div
              className={styles.articledesc}
              style={{ background: "#ededed" }}
            >
              {" "}
              Join to gain access to more in-depth data
            </div>
            <div
              className={styles.articledesc}
              style={{ background: "#ededed" }}
            >
              {" "}
              You can also see random stat tidbits all in one place
            </div>
            <div
              className={styles.articledesc}
              style={{ background: "#ededed" }}
            >
              {" "}
              Get a summary of what is going on in the league so you are always
              in the know
            </div>
          </div>
        </div>
        {newsletters.map((newsletter, index) => (
          <a
            className={styles.griditem}
            href={newsletter.Link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <img
              className={styles.pic}
              src={newsletter.Picture}
              alt={newsletter.Title}
            />
            <div className={styles.articletitle}>{newsletter.Title}</div>
            <div className={styles.articledetail}>
              <b>Date: </b>
              {String(newsletter.Date["$date"]).substring(0, 10)}
            </div>
            <div className={styles.articledesc}>{newsletter.Preview}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
