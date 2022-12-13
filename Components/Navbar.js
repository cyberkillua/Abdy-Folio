import React from "react";
import Link from "next/link";
import Logo from "../public/logo.svg";
import Image from "next/image";
import styles from "../styles/navbar/navbar.module.css";
import Menu from "../public/hamburger.svg";
import { useState } from "react";
import Burger from "./Burger";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <Burger setOpen={setOpen} />}
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
        <div className={styles.toggler}>
          <Image src={Menu} alt="Menu" onClick={() => setOpen(!open)} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
