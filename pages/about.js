/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/about/about.module.css";
import Link from "next/link";
import Alogo from "../public/Alogo.svg";
import Twitter from "../public/twitter.svg";
import Behance from "../public/behance.svg";
import Link2 from "../public/link.svg";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AbdyMovic Design - About Page</title>
        <meta
          name="description"
          content="Abdullahi Ajao Adam Portfolio about page"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.navbar}>
        <Link href="/">
          <Image src={Alogo} alt="logo" />
        </Link>
        <Link
          href="mailto:abdymovicxi@gmail.com"
          arget="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.btn}>Contact Me</button>
        </Link>
      </div>
      <div className={styles.text}>
        Hey there! my name is Adam Abdullah and 'm a seasoned product designer
        with 4+ years of experience, driven by the belief that design can solve
        problems and enrich experiences. Proficient in UI design, UX research,
        graphic design, animation, and illustration, I also excel in product
        management, using tools like Jira and Trello. As a certified Scrum
        Master, I'm passionate about effective product management and
        collaborative teamwork. I have a deep appreciation for accessibility in
        design and am dedicated to creating inclusive solutions. Ensuring that
        everyone benefits from thoughtful design is a core aspect of my work.
        Beyond my design expertise, my experience as a Scrum Master, and my
        passion for product management, I've earned the title of "Product guy.”
        Off the clock, I'm either on the football pitch or immersed in Football
        Manager. From crafting user-friendly interfaces to leading inclusive
        product strategies, I bring a mix of creativity, skill, and passion to
        everything I do. Let's connect and discuss how I can contribute to your
        next project in a way that's accessible, enriching, and efficiently
        managed for all.
      </div>
      <div className={styles.btnContainer}>
        <Link href="" arget="_blank" rel="noopener noreferrer">
          <button className={styles.btnTwo}>View Resume</button>
        </Link>
      </div>
      <div>
        <div className={styles.socials}>
          <div>
            <Image src={Twitter} alt="twitter" />
          </div>
          <div>
            <Image src={Link2} alt="linkedln" />
          </div>
          <div>
            <Image src={Behance} alt="behance" />
          </div>
        </div>
      </div>
    </div>
  );
}
