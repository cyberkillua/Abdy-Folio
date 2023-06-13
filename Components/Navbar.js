import React from "react";
import styles from "../styles/navbar/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.nav} id="top">
      <div>
        <Link
          href="mailto:moshood988@gmail.com"
          arget="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.btn}>Contact Me</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
