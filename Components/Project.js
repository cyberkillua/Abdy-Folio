import React from "react";
import styles from "../styles/project/project.module.css";
import sunday from "../public/Sunday-Ball.svg";
import cyber from "../public/CyberKillua.svg";
import aidoo from "../public/Aidoo.svg";
import elipse from "../public/Ellipse.svg";
import Image from "next/image";

const project = [
  {
    image: sunday,
    alt: "sunday",
    presentation: "presentationLink",
    visitLink: "visitlink",
  },
  {
    image: cyber,
    alt: "cyber",
    presentation: "",
    visitLink: "visitlink",
  },
  {
    image: aidoo,
    alt: "aidoo",
    presentation: "hi",
    visitLink: "hi",
  },
  {
    image: sunday,
    alt: "sunday2",
    presentation: "",
    visitLink: "visitlink",
  },
];

export const Project = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectCon}>
        {project.map((oneProject, index) => {
          return (
            <div className={styles.project} key={oneProject.alt}>
              <Image src={oneProject.image} alt={oneProject.alt} />

              <div
                className={styles.linkContainer}
                style={
                  oneProject.presentation == ""
                    ? { justifyContent: "flex-end" }
                    : {}
                }
              >
                {oneProject.presentation !== "" ? (
                  <a href={oneProject.presentation} className={styles.btnlink}>
                    <button className={styles.btn}>Presentation</button>
                  </a>
                ) : (
                  ""
                )}
                {oneProject.visitLink !== "" ? (
                  <a href={oneProject.visitLink} className={styles.btnlink}>
                    <Image src={elipse} className={styles.elipse} />
                  </a>
                ) : (
                  ""
                )}
              </div>
              <div className={styles.overlay}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
