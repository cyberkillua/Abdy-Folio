import Image from "next/image";
import Logo from "../public/logo.svg";
import close from "../public/x.svg";
import styles from "../styles/burger/Burger.module.css";
import Link from "next/link";

import { useEffect } from "react";

// import { gsap } from "gsap";
const Burger = ({ setOpen }) => {
  // useEffect(() => {
  //   gsap.timeline().fromTo(
  //     "#burger",
  //     {
  //       y: -600,
  //     },
  //     {
  //       y: 0,
  //       duration: 1,
  //       ease: "power2.out",
  //     }
  //   );
  // }, []);

  return (
    <div className={styles.container} id="burger">
      <div className={styles.top}>
        <Image src={Logo} alt="Killua Logo" />
        <Image
          src={close}
          alt="close"
          onClick={() => {
            setOpen(false);
          }}
        />
      </div>
      <div className={styles.links}>
        <Link
          href="#resume"
          onClick={() => {
            setOpen(false);
          }}
        >
          Resume
        </Link>
        <Link
          href="#contact"
          onClick={() => {
            setOpen(false);
          }}
        >
          Contact
        </Link>
        <Link
          href="#contact"
          onClick={() => {
            setOpen(false);
          }}
        >
          Works
        </Link>
      </div>
    </div>
  );
};

export default Burger;
