// import React from "react";
// import styles from "../styles/project/project.module.css";
// import { gsap } from "gsap";
// import { useEffect } from "react";
// import cykea from "../public/Cykea.svg";
// import discord from "../public/Discord.svg";
// import salat from "../public/Salatsync.svg";
// import sunday from "../public/SundayBall.svg";
// import cyber from "../public/cyber.svg";
// import aidoo from "../public/AIDOO.svg";

// import Image from "next/image";
// import Link from "next/link";

// export const Project = () => {
//   const jobs2 = [1, 2, 3, 4, 5, 6];
//   const projectTl = gsap.timeline();

//   useEffect(() => {
//     projectTl
//       .to("#pic-one", {
//         xPercent: -200,
//         repeat: -1,
//         duration: 10,
//         ease: "linear",
//       })
//       .to("#pic-two", {
//         xPercent: 100,
//         repeat: -1,
//         duration: 9,
//         ease: "linear",
//       })
//       .totalProgress(0.5);

//     gsap.set("#pic-con", { xPercent: -50 });

//     gsap.set("#pic-con-two", { xPercent: -100 });

//     const projOne = document.getElementById("pic-con");
//     const projTwo = document.getElementById("pic-con-two");

//     projOne.addEventListener("mouseenter", () => {
//       projectTl.pause();
//     });

//     projOne.addEventListener("mouseleave", () => {
//       projectTl.play();
//     });

//     projTwo.addEventListener("mouseenter", () => {
//       projectTl.pause();
//     });

//     projTwo.addEventListener("mouseleave", () => {
//       projectTl.play();
//     });
//   }, []);
//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>
//         <section className={styles.contain}>
//           <div className={styles.textCon} id="pic-con">
//             {jobs2.map((job) => {
//               return (
//                 <div className={styles.text} id="pic-one" key={job}>
//                   <Link
//                     href="https://www.moshood.xyz/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Image
//                       className={styles.img}
//                       src={cyber}
//                       alt="cyberkillua"
//                     />
//                   </Link>

//                   <Link
//                     href="https://www.cykea.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Image src={cykea} alt="cykea" />
//                   </Link>

//                   <Image src={salat} alt="salat" />
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         <section className={styles.contain}>
//           <div className={styles.textCon} id="pic-con-two">
//             {jobs2.map((job) => {
//               return (
//                 <div className={styles.textTwo} id="pic-two" key={job}>
//                   <Image src={discord} alt="discord" />
//                   <Link
//                     href="https://golden-jalebi-56d4e0.netlify.app/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Image src={sunday} alt="sunday" />
//                   </Link>

//                   <Image src={aidoo} alt="aidoo" />
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };
