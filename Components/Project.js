import React from "react";
import styles from "../styles/Project/Project.module.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import cykea from "../public/Cykea.svg";
import discord from "../public/Discord.svg";
import salat from "../public/Salatsync.svg";
import sunday from "../public/SundayBall.svg";
import funky from "../public/Funkythar.svg";
import cyber from "../public/cyber.svg";
import aidoo from "../public/AIDOO.svg";

import Image from "next/image";

export const Project = () => {
  const jobs2 = [1, 2, 3, 4, 5];
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to("#text-one", {
      xPercent: -100,
      repeat: -1,
      duration: 9,
      ease: "linear",
    })
      .to("#text-two", {
        xPercent: 100,
        repeat: -1,
        duration: 9,
        ease: "linear",
      })
      .totalProgress(0.5);

    gsap.set("#text-con", { xPercent: -50 });

    gsap.set("#text-con-two", { xPercent: -100 });
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.contain}>
          <div className={styles.textCon} id="text-con">
            {jobs2.map((job) => {
              return (
                <div className={styles.text} id="text-one" key={job}>
                  <Image className={styles.img} src={cyber} alt="cyberkillua" />

                  <Image src={cykea} alt="cykea" />

                  <Image src={salat} alt="salat" />
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.contain}>
          <div className={styles.textCon} id="text-con-two">
            {jobs2.map((job) => {
              return (
                <div className={styles.textTwo} id="text-two" key={job}>
                  <Image src={funky} alt="Funkythar" />

                  <Image src={discord} alt="discord" />

                  <Image src={sunday} alt="sunday" />

                  <Image src={aidoo} alt="aidoo" />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};
