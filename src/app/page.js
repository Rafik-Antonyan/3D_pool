"use client";
import Footer from "@/components/Footer";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import MainPage from "@/components/MainPage";
import Wannajump from "@/components/WannaJump";
import { useState } from "react";
export default function Home() {
  const [jumpAnswer, setJumpAnswer] = useState("");
  const handleAnswer = () => {
    setJumpAnswer("yes");
  };

  return (
    <div className={styles.main}>
      <Header jumpAnswer={jumpAnswer} />
      {/* <MainPage /> */}
      {jumpAnswer === "yes" ? (
        <MainPage />
      ) : (
        <Wannajump handleAnswer={handleAnswer} jumpAnswer={jumpAnswer} />
      )}
      {jumpAnswer === "yes" && <Footer />}
    </div>
  );
}
