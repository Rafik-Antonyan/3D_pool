import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

useGLTF.preload("./model/flamingo.gltf");
export function Flamingo() {
  const [rotationX, setRotationX] = useState(0.5);
  const [rotationY, setRotationY] = useState(-1);
  const [num, setNum] = useState(0);
  const [positionX, setPosditionX] = useState(2);
  const [positionY, setPosditionY] = useState(0);
  const [isDown, setIsDown] = useState(true);
  const [currentScrollTop, setCurrentScrollTop] = useState(0);

  const mesh = useRef();

  const gltf = useGLTF("./model/flamingo.gltf");

  const positionXDifference = 0.13;
  const positionYDifference = 0.102;
  const rotationXDifference = 0.02;
  const rotationYDifference = 0.08;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDown]);

  const handleScroll = () => {
    const isPositionInRange =
      (mesh.current.position.y > -1 || !isDown) &&
      document.documentElement.scrollTop < 470 &&
      (mesh.current.position.y <= 1.95 || isDown);

    if (isPositionInRange) {
      const updateState = (
        modifierX,
        modifierY,
        modifierRotX,
        modifierRotY
      ) => {
        setPosditionX((prev) => prev + modifierX * (isDown ? -1 : 1));
        setPosditionY((prev) => prev + modifierY * (isDown ? 1 : -1));
        setRotationX((prev) => prev + modifierRotX * (isDown ? -1 : 1));
        setRotationY((prev) => prev + modifierRotY * (isDown ? 1 : -1));
      };

      updateState(
        positionXDifference,
        positionYDifference,
        rotationXDifference,
        rotationYDifference
      );
    }
  };

  useEffect(() => {
    gltf.scene.scale.set(0.6, 0.6, 0.6);
    gltf.scene.position.set(2, 2, 0);
  }, [gltf]);

  const overScroll = () => {
    if (document.documentElement.scrollTop > 470) {
      setRotationX(-0.14);
      setRotationY(1.56);
      setPosditionY(() => 3.264);
      setPosditionX(() => -2.16);
    }
    if (!document.documentElement.scrollTop) {
      setRotationX(0.5);
      setRotationY(-1);
      setPosditionY(0);
      setPosditionX(2);
    }
  };

  const toggleIsDown = () => {
    if (currentScrollTop !== document.documentElement.scrollTop) {
      setIsDown(currentScrollTop <= document.documentElement.scrollTop);
    }
  };

  useFrame(() => {
    mesh.current.position.x = positionX;
    setNum((prev) => prev + 0.02);

    setCurrentScrollTop(document.documentElement.scrollTop);

    mesh.current.position.y = 2 + Math.sin(num) * 0.05 - positionY + 0.1;

    toggleIsDown();
    overScroll();
  });

  return (
    <primitive
      ref={mesh}
      object={gltf.scene}
      rotation-y={rotationY}
      rotation-x={rotationX}
    />
  );
}
