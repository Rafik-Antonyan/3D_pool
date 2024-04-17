import React, { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader, MeshBasicMaterial } from "three";

export function Water() {
  const [currentScrollTop, setCurrentScrollTop] = useState(0);
  const [positionY, setPosditionY] = useState(0.7);
  const [rotationX, setRotationX] = useState(0.5);
  const [positionX, setPosditionX] = useState(2);
  const [isDown, setIsDown] = useState(true);
  const [num, setNum] = useState(0);
  const [rotationY] = useState(-1);

  const mesh = useRef();

  const gltf = useLoader(GLTFLoader, "./model/water.gltf");
  const [watherMaterial] = useLoader(TextureLoader, [
    "./assets/texture/Water_basecolor.png",
  ]);

  const positionXDifference = 0.12;
  const positionYDifference = 0.1;
  const rotationXDifference = 0.018;

  const material = new MeshBasicMaterial({
    map: watherMaterial,
  });

  useEffect(() => {
    const handleScroll = () => {
      const isMeshWithinYBounds = mesh.current.position.y > -1.8 || !isDown;
      const isPageOffsetWithinBounds = document.documentElement.scrollTop < 470;
      const isMeshWithinXBounds = mesh.current.position.y <= 1.2 || isDown;

      if (
        isMeshWithinYBounds &&
        isPageOffsetWithinBounds &&
        isMeshWithinXBounds
      ) {
        const newYModifier = isDown ? 1 : -1;
        const newXModifier = isDown ? -1 : 1;
        const newRotationXModifier = isDown ? -1 : 1;

        setPosditionY((prev) => prev + newYModifier * positionYDifference);
        setPosditionX((prev) => prev + newXModifier * positionXDifference);
        setRotationX(
          (prev) => prev + newRotationXModifier * rotationXDifference
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDown]);

  useEffect(() => {
    gltf.scene.scale.set(0.02, 0.02, 0.02);
    gltf.scene.position.set(2, 1.4, 0);
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.material = material;
      }
    });
  }, [gltf]);

  const overScroll = () => {
    if (document.documentElement.scrollTop > 470) {
      setRotationX(-0.07);
      setPosditionY(3.9);
      setPosditionX(-1.84);
    }
    if (!document.documentElement.scrollTop) {
      setRotationX(0.5);
      setPosditionY(0.7);
      setPosditionX(2);
    }
  };

  const toggleIsDown = () => {
    if (currentScrollTop !== document.documentElement.scrollTop) {
      setIsDown(currentScrollTop <= document.documentElement.scrollTop);
    }
  };

  const waterAnimation = () => {
    let t = Math.sin(num) * -0.05;
    watherMaterial.offset.set(0, t);
  };

  useFrame(() => {
    mesh.current.position.y = 2 - positionY;
    mesh.current.position.x = positionX;

    setCurrentScrollTop(document.documentElement.scrollTop);
    setNum((prev) => prev + 0.02);

    waterAnimation();
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
