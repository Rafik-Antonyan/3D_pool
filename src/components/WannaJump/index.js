"use client";
import React from "react";
import styles from "./jump.module.scss";
import DragLines from "../Draglines";
import Button from "../button";
import WaterRipple from "../WaterRipple/WaterRipple";

export default function Wannajump({ handleAnswer }) {
  return (
    <div className={styles.main}>
      <WaterRipple />
      <div className={styles.jumpmodal}>
        <div className={styles.draglines}>
          <DragLines size={"700.680"} />
        </div>
        <div className={styles.textContainer}>
          <span className={styles.text}>Wanna Jump In</span>
          <Button color={"second"} size={"small"} onClick={handleAnswer}>
            Yes
          </Button>
        </div>
      </div>
    </div>
  );
}
