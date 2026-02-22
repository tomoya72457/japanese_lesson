"use client";

import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "dark" | "ghost";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
  href?: string;
}

const baseStyle =
  "inline-flex items-center justify-center px-8 py-4 font-bold transition-all duration-300 rounded-full w-full sm:w-auto text-lg shadow-sm";
const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-gray-900 hover:bg-yellow-400 hover:shadow-md hover:-translate-y-0.5",
  secondary:
    "bg-accent text-white hover:bg-teal-500 hover:shadow-md hover:-translate-y-0.5",
  outline:
    "bg-transparent border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-gray-900",
  dark: "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-md hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-none",
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  icon = null,
  href,
}: ButtonProps) {
  const classNames = `${baseStyle} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classNames}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={classNames}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
