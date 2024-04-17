"use client";
import React, { useState, Suspense } from "react";
import styles from "./mainpage.module.scss";
import AnimateText from "../AnimateText";
import Button from "../button";
import Image from "next/image";
import DragLines from "../Draglines";
import { Carousel } from "react-responsive-carousel";
import { Flamingo } from "@/components/models/flamingo/flamingo";
import { Canvas } from "@react-three/fiber";
import { Water } from "../models/water/water";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MainPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const opinions = [
    {
      id: 1,
      text: "The crypto assets’ risk is priced per single asset, with the portfolio effects resolved by the market through the component of single asset stablecoins and the overall composition.",
      image: "/assets/section3/img1.png",
    },
    {
      id: 2,
      text: "The native $SWM token is used to vote-stake for asset pools which determines the weightings of the respective asset stablecoins in the Pool.",
      image: "/assets/section3/img2.png",
    },
    {
      id: 3,
      text: "Net transaction fees generated from the Pool accrue to the token holders.",
      image: "/assets/section3/img3.png",
    },
    {
      id: 4,
      text: "The fee rate for the Pool is dynamic based on the volatility and composition of the basket at that time.",
      image: "/assets/section3/img4.png",
    },
  ];

  const sliderContent = [
    {
      id: 1,
      text: "Single crypto asset-collateralised borrowing Pools that create their own USD denominated stablecoins, i.e. ETH creates ethUSD.",
      image: "/assets/network.png",
      width: 49.805,
      height: 49.805,
    },
    {
      id: 2,
      text: "Spend your crypto-backed stablecoins or add them to a global liquidity Pool to generate global stablecoins, i.e. lock ethUSD to issue poolUSD.",
      image: "/assets/coin.png",
      width: 49.805,
      height: 46.643,
    },
    {
      id: 3,
      text: "Minted poolUSD are there to manage crypto assets’ differing, yet high, specific risk and high correlations.",
      image: "/assets/warning.png",
      width: 56,
      height: 56,
    },
    {
      id: 4,
      text: "Better risk management equals peace of mind, equals more time at the pool, with a refreshing drink in hand.",
      image: "/assets/coctail.png",
      width: 30.412,
      height: 62.447,
    },
  ];

  const renderCustomIndicator = (onClickHandler, isSelected, index, label) => {
    const indicatorStyle = {
      background: isSelected ? "#FF4D95" : "#FF4D9540",
      width: isSelected ? 32 : 16,
      height: 4,
      display: "inline-block",
      margin: "0 8px",
      cursor: "pointer",
    };

    return (
      <li
        key={index}
        style={indicatorStyle}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  const SeeForecast = () => {
    console.log("See Forecast");
  };
  const handleClick = (event) => {
    const clickX = event.clientX - event.target.getBoundingClientRect().left;
    const divCenter = event.target.offsetWidth / 2;

    if (clickX < divCenter) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className={styles.main}>
      <div className="container">
        {/* first section start*/}
        <section className={styles.section1}>
          <div className={styles.container}>
            <AnimateText />
            <div className={styles.parentoftext}>
              <span className={styles.text}>
                <span
                  style={{
                    color: "#FF4D95",
                    fontSize: "20px",
                    fontStyle: "italic",
                    fontWeight: "700",
                    lineHeight: "120%",
                  }}
                >
                  If that’s you
                </span>
                , come to the Swimming Pool!
                <br /> Make your illiquid assets liquid. Never spent your
                crypto,
                <br /> instead,{" "}
                <span
                  style={{
                    color: "#FF4D95",
                    fontSize: "20px",
                    fontStyle: "italic",
                    fontWeight: "700",
                    lineHeight: "120%",
                  }}
                >
                  borrow against it
                </span>
                . Buy and sell cross-chain!
              </span>
            </div>
            <div className={styles.firstsecbuttons}>
              <Button color={"second"} size={"small"}>
                Join us at the pool
              </Button>
              <Button color={"primary"} size={"small"} onClick={SeeForecast}>
                See the forecast
              </Button>
            </div>
          </div>
          <div className={styles.firstsecImg} id='section'>
            <Suspense fallback={null}>
              <Canvas shadows>
                <Flamingo />
                <Water />
                <directionalLight color={[1,1,1]} position={[10, 10, 10]}/>
                <directionalLight color={[1,1,1]} position={[6, 6, 20]}/>
              </Canvas>
            </Suspense>
          </div>
        </section>
        {/* first section end*/}

        {/* second section start */}
        <section className={styles.section2}>
          <div className={styles.imgbox} />
          <div className={styles.modal} onClick={handleClick}>
            <div className={styles.draglines}>
              <DragLines />
            </div>
            <div className={styles.textConatiner}>
              <Carousel
                autoPlay={true}
                showStatus={false}
                showThumbs={false}
                showArrows={false}
                swipeable={true}
                selectedItem={currentImageIndex}
                renderIndicator={renderCustomIndicator}
              >
                {sliderContent.map((slide, i) => (
                  <div className={styles.slider} key={i}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={slide.image}
                        alt="network"
                        width={slide.width}
                        height={slide.height}
                      />
                    </div>
                    <div className={styles.slidertext}>
                      <span>{slide.text}</span>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
        {/* second section end */}

        {/* third section start */}
        <section className={styles.section3}>
          <div className={styles.draglines3}>
            <DragLines />
          </div>
          <div className={styles.sectionbox3}>
            <div className={styles.title}>
              <span>What makes our Pool better than others?</span>
            </div>
            <div className={styles.opinionContent}>
              {opinions.map((item, i) => {
                return (
                  <div className={styles.opinion} key={i}>
                    <div>
                      <Image
                        src={item.image}
                        alt="network"
                        width={50}
                        height={50}
                        objectFit="contain"
                      />
                    </div>
                    <div>
                      <span>{item.text}</span>
                    </div>
                    <div className={styles.opinion2} key={i}>
                      <div>
                        <Image
                          src={item.image}
                          alt="network"
                          width={50}
                          height={50}
                          objectFit="contain"
                        />
                      </div>
                      <div>
                        <span>{item.text}</span>
                      </div>
                      <div className={styles.opinion3} key={i}>
                        <div>
                          <Image
                            src={item.image}
                            alt="network"
                            width={50}
                            height={50}
                            objectFit="contain"
                          />
                        </div>
                        <div>
                          <span>{item.text}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.buttons}>
              <Button color={"second"} size={"small"}>
                Join us at the pool
              </Button>
              <Button color={"primary"} size={"small"} onClick={SeeForecast}>
                See the forecast
              </Button>
            </div>
          </div>
        </section>
        {/* third section end */}
      </div>
    </div>
  );
}
