import { useEffect, useState } from "react";
import server_link from "../server_link";
import { Helmet } from "react-helmet";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"; // If you want to add custom styles, create a CSS module file for the newsletter component


const Navbar = () => {
  return (
    <nav className={styles.navbaritems}>
      <Link className={styles.logopic} href="/" >
          <img src={"/TopLogo.png"} alt="logo" />
      </Link>
      <div className={styles.navmenu}>
        <li>
            <Link href="/" className={styles.links}>
              Home
          </Link>
          
          <Link href="/Newsletter" className={styles.links}>
              Newsletter
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;