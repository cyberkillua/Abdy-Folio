import React from "react";
import styles from "../styles/project/project.module.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import sunday from "../public/Sunday-Ball.svg";
import cyber from "../public/CyberKillua.svg";
import aidoo from "../public/AIDOO.svg";
import generator from "../public/Generator.svg";

import Image from "next/image";
import Link from "next/link";

const project = [
  {
    image: sunday,
    alt: "sunday",
  },
  {
    image: cyber,
    alt: "cyber",
  },
  {
    image: aidoo,
    alt: "aidoo",
  },
  {
    image: generator,
    alt: "generator",
  },
];

export const Project = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectCon}>
        {project.map((oneProject) => {
          return (
            <div className={styles.project} key={oneProject.alt}>
              <Image src={oneProject.image} alt={oneProject.alt} />
              <div className={styles.overlay}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
