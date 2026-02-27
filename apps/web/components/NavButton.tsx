"use client";

import { MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  isSelected?: boolean;
  onClick?: MouseEventHandler;
  className?: string;
}

export default function NavButton({
  children,
  isSelected,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${isSelected && styles.selected} border-2 rounded-sm text-sm text-center px-2 py-0.5 mx-1 ${className}`}
      type="button"
      onClick={onClick ? onClick : () => {}}
    >
      {children}
    </button>
  );
}

//<div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent
// border-r-transparent border-b-black" />
