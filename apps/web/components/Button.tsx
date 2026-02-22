"use client";

import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  action?: Float16Array;
  className?: string;
}

function onPress() {
  console.log("m");
}

export default function Button({ children, action, className }: ButtonProps) {
  return (
    <button
      className={`${styles.button} border-2 rounded-sm text-sm text-center px-2 py-0.5 mx-1 ${className}`}
      type="button"
      //onClick={onPress}
    >
      {children}
    </button>
  );
}

//<div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent
// border-r-transparent border-b-black" />
