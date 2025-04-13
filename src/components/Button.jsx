// src/components/Button.jsx
import { Link } from "react-router";

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-2 text-sm font-medium transition duration-200 rounded-lg tracking-wide";
  const variants = {
    primary: "bg-black text-white hover:bg-neutral-800",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    ghost: "text-black hover:underline",
  };

  const combined = `${baseStyles} ${variants[variant]} ${className}`;

  return href ? (
    <Link to={href} className={combined}>
      {children}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
