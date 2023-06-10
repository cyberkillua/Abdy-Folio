import Goat from "../public/GOAT.svg";
import Cloud from "../public/Cloud.svg";
import Fire from "../public/fire.svg";
import Image from "next/image";
import styles from "../styles/hero/hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        I am a Designer and Product Manager currently at Fezzant. I love to
        build powerful and elegant products and I’m passionate about technology
        and what they can do for people.
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.img}>
          <Image className={styles.topCloud} src={Cloud} alt="Cloud" />
          <Image className={styles.pic} src={Goat} alt="Big A" />
          <Image className={styles.bottomCloud} src={Cloud} alt="Cloud" />
        </div>
        <div className={styles.info}>
          <div className={styles.oneInfo}>
            <p>About</p>
            <Image className={styles.fire} src={Fire} alt="Fire" />
          </div>
          <div className={styles.oneInfo}>
            <p>Works</p>
            <Image className={styles.fire} src={Fire} alt="Fire" />
          </div>
          <div className={styles.oneInfo}>
            <p>Contact</p>
            <Image className={styles.fire} src={Fire} alt="Fire" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
