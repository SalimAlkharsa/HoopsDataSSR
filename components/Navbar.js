import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import server_link from "../server_link";
import { Helmet } from "react-helmet";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"; // If you want to add custom styles, create a CSS module file for the newsletter component


const Navbar = () => {
  return (
    <nav className={styles.NavbarItems}>
      <Link href="/home">
        <div className={styles.logoPic}>
          <img src={"/TopLogo.png"} alt="logo" />
        </div>
      </Link>
      <div className={styles.navMenu}>
        <ul>
          <li>
            <Link href="/Home">
              <div className={styles.Links}>Home</div>
            </Link>
          </li>
          <li>
            <Link href="/Newsletter">
              <div className={styles.Links}>Newsletter</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
