"use client";
import React from "react";
import styles from "./button.module.scss";

export default function Button({
  variant = "contained",
  color,
  size,
  children,
  onClick,
  disabled,
  ...rest
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[color]} ${styles[size]}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
