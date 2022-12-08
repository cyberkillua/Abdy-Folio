import React from "react";
import Link from "next/link";
import Logo from "../public/logo.svg";
import Image from "next/image";
import styles from "../styles/navbar/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link href="#home">
          <Image src={Logo} alt="AbdyMovic Logo" />
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="#project">Resume</Link>
        <Link href="#contact">Contact</Link>
        <Link href="#contact">Works</Link>
      </div>
      {/* <div className={styles.toggler}>
        <Image src={Menu} alt="Menu" onClick={() => setOpen(!open)} />
      </div> */}
    </nav>
  );
};

export default Navbar;
