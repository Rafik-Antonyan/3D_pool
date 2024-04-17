"use client";
import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={`${"container"} ${styles.footerContent}`}>
        <div className={styles.logo}>
          <Image
            src="/assets/logo.png"
            alt="social media"
            width={25.84}
            height={25.84}
          />
          <span className={styles.Title1}>Swimming</span>
          <span className={styles.Title2}>Pool</span>
        </div>
        <div className={styles.socials}>
          <Link href="https://x.com/swmpool" target="_blank">
            <Image
              src="/assets/socials/bi_twitter.png"
              alt="social media"
              width={32}
              height={32}
            />
          </Link>
          <Link href="https://ethermail.io/community/swmpool" target="_blank">
            <Image
              src="/assets/socials/ethermail.png"
              alt="social media"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
      <div className={styles.privacy}>
        <div>
          <a href="/privacy">Privacy policy</a>
        </div>
        <div className={styles.copyright}>
          <span>&copy; Copyright 2023 Swimming pool</span>
        </div>
      </div>
    </div>
  );
}
