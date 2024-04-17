"use client";
import React from "react";
import styles from "./dragline.module.scss";

export default function DragLines() {
  return (
    <div className={styles.container}>
      <div className={styles.DragLines}></div>
      <div className={styles.DragLines}></div>
      <div className={styles.DragLines}></div>
      <div className={styles.DragLines}></div>
      <div className={styles.DragLines}></div>
      <div className={styles.DragLines}></div>
    </div>
  );
}
