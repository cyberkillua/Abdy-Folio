import Goat from "../public/GOAT.svg";
import Image from "next/image";
import styles from "../styles/hero/hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        My name is Adam Abdullah, I am a Product Designer and Manager currently
        working at Fezzant. I love to build powerful and elegant products and
        I’m passionate about technology and what they can do for people.
      </div>
      <div className={styles.img}>
        <Image className={styles.pic} src={Goat} alt="Big A" />
      </div>
    </section>
  );
};

export default Hero;
