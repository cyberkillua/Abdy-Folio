import React from "react";
import styles from "../styles/navbar/navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.nav} id="top">
      <div>
        <Link href="mailto:moshood988@gmail.com">
          <a target="_blank" rel="noopener noreferrer">
            <button>
              <Image src={btn} alt="btn" />
            </button>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
