"use client";
import React from "react";
import dynamic from "next/dynamic";

const WaterWave = dynamic(
  () => {
    return import("react-water-wave");
  },
  { ssr: false }
);

const WaterRipple = () => {
  return (
    <WaterWave
      imageUrl="/assets/pool.png" // Replace with the actual path to your image file
      style={{ width: "100%", height: "100vh" }}
    >
      {({ drop }) => (
        <div onMouseMove={drop}>{/* Your content goes here */}</div>
      )}
    </WaterWave>
  );
};

export default WaterRipple;
