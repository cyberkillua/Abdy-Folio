import Head from "next/head";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import styles from "../styles/Home.module.css";

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
      <Hero />
    </div>
  );
}
