"use client";
import React, { useEffect, useRef } from "react";
import anime from "animejs";

import styles from "./textanimate.module.scss";

export default function AnimateText() {
  const titleRef = useRef(null);
  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: `.${styles.ml2} .${styles.letter}`,
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: `.${styles.ml2}`,
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }, []);

  return (
    <div className={styles.textContainer}>
      <h1 ref={titleRef} className={`${styles.h1} ${styles.ml2}`}>
        <span className={`${styles.title} ${styles.letter}`}>T</span>
        <span className={`${styles.title} ${styles.letter}`}>h</span>
        <span className={`${styles.title} ${styles.letter}`}>e </span>
        <span className={`${styles.title} ${styles.letter}`}>M</span>
        <span className={`${styles.title} ${styles.letter}`}>a</span>
        <span className={`${styles.title} ${styles.letter}`}>r</span>
        <span className={`${styles.title} ${styles.letter}`}>k</span>
        <span className={`${styles.title} ${styles.letter}`}>e</span>
        <span className={`${styles.title} ${styles.letter}`}>t </span>
        <span className={`${styles.title} ${styles.letter}`}>i</span>
        <span className={`${styles.title} ${styles.letter}`}>s </span>
        <span className={`${styles.title} ${styles.letter}`}>b</span>
        <span className={`${styles.title} ${styles.letter}`}>o</span>
        <span className={`${styles.title} ${styles.letter}`}>r</span>
        <span className={`${styles.title} ${styles.letter}`}>i</span>
        <span className={`${styles.title} ${styles.letter}`}>n</span>
        <span className={`${styles.title} ${styles.letter}`}>g</span>
      </h1>
      <h1 ref={titleRef} className={`${styles.h2} ${styles.ml2}`}>
        <span className={`${styles.title} ${styles.letter}`}>L</span>
        <span className={`${styles.title} ${styles.letter}`}>i</span>
        <span className={`${styles.title} ${styles.letter}`}>q</span>
        <span className={`${styles.title} ${styles.letter}`}>u</span>
        <span className={`${styles.title} ${styles.letter}`}>i</span>
        <span className={`${styles.title} ${styles.letter}`}>d</span>
        <span className={`${styles.title} ${styles.letter}`}>i</span>
        <span className={`${styles.title} ${styles.letter}`}>t</span>
        <span className={`${styles.title} ${styles.letter}`}>y </span>
        <span className={`${styles.title} ${styles.letter}`}>i</span>
        <span className={`${styles.title} ${styles.letter}`}>s </span>
        <span className={`${styles.title} ${styles.letter}`}>d</span>
        <span className={`${styles.title} ${styles.letter}`}>r</span>
        <span className={`${styles.title} ${styles.letter}`}>y</span>
        <span className={`${styles.title} ${styles.letter}`}>i</span>
        <span className={`${styles.title} ${styles.letter}`}>n</span>
        <span className={`${styles.title} ${styles.letter}`}>g </span>
        <span className={`${styles.title} ${styles.letter}`}>u</span>
        <span className={`${styles.title} ${styles.letter}`}>p</span>
      </h1>
      <h1 ref={titleRef} className={`${styles.h3} ${styles.ml2}`}>
        <span className={`${styles.title} ${styles.letter}`}>H</span>
        <span className={`${styles.title} ${styles.letter}`}>o</span>
        <span className={`${styles.title} ${styles.letter}`}>l</span>
        <span className={`${styles.title} ${styles.letter}`}>d</span>
        <span className={`${styles.title} ${styles.letter}`}>e</span>
        <span className={`${styles.title} ${styles.letter}`}>r</span>
        <span className={`${styles.title} ${styles.letter}`}>s </span>
        <span className={`${styles.title} ${styles.letter}`}>,</span>
        <span className={`${styles.title} ${styles.letter}`}>e</span>
        <span className={`${styles.title} ${styles.letter}`}>v</span>
        <span className={`${styles.title} ${styles.letter}`}>e</span>
        <span className={`${styles.title} ${styles.letter}`}>r</span>
        <span className={`${styles.title} ${styles.letter}`}>y</span>
        <span className={`${styles.title} ${styles.letter}`}>w</span>
        <span className={`${styles.title} ${styles.letter}`}>h</span>
        <span className={`${styles.title} ${styles.letter}`}>e</span>
        <span className={`${styles.title} ${styles.letter}`}>r</span>
        <span className={`${styles.title} ${styles.letter}`}>e</span>
      </h1>
    </div>
  );
}
