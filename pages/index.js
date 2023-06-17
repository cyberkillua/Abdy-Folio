import Head from "next/head";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import styles from "../styles/Home.module.css";
import MovingSection from "../Components/MovingSection";
import { Project } from "../Components/Project";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AbdyMovic Design</title>
        <meta name="description" content="Abdullahi Ajao Adam Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <div className={styles.heroProj}>
        <div className={styles.hero}>
          {" "}
          <Hero />
        </div>
        <div className={styles.proj}>
          {" "}
          <Project />
        </div>
      </div>

      {/* <MovingSection /> */}

      {/* <Footer /> */}
    </div>
  );
}
