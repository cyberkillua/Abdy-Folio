// import React from "react";
// import styles from "../styles/movingSection/MovingSection.module.css";
// import { gsap } from "gsap";
// import { useEffect } from "react";
// import star from "../public/Star.svg";
// import Image from "next/image";

// const MovingSection = () => {
//   const jobs2 = [1, 2, 3, 4, 5];
//   const tl = gsap.timeline();

//   useEffect(() => {
//     tl.to("#text-one", {
//       xPercent: -100,
//       repeat: -1,
//       duration: 9,
//       ease: "linear",
//     })
//       .to("#text-two", {
//         xPercent: 100,
//         repeat: -1,
//         duration: 9,
//         ease: "linear",
//       })
//       .totalProgress(0.5);

//     gsap.set("#text-con", { xPercent: -50 });

//     gsap.set("#text-con-two", { xPercent: -100 });
//   }, []);
//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>
//         <section className={styles.contain}>
//           <div className={styles.textCon} id="text-con">
//             {jobs2.map((job) => {
//               return (
//                 <div className={styles.text} id="text-one" key={job}>
//                   Product Management
//                   <Image src={star} alt="star" />
//                   Product Design
//                   <Image src={star} alt="star" />
//                   Creative Design
//                   <Image src={star} alt="star" />
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         <section className={styles.contain}>
//           <div className={styles.textCon} id="text-con-two">
//             {jobs2.map((job) => {
//               return (
//                 <div className={styles.textTwo} id="text-two" key={job}>
//                   Figma JIRA Photoshop Framer AdobeXD Notion Slack Trello
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default MovingSection;
