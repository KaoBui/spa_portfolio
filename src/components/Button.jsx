import { Link } from "react-router";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-4 md:px-6 py-1 md:py-2 text-sm font-medium leading-none transition duration-200 rounded-lg tracking-wide";
  const variants = {
    primary: "bg-black text-white hover:bg-neutral-800",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    ghost: "text-black hover:underline",
  };
  const containerRef = useRef(null);
  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const combined = `${baseStyles} ${variants[variant]} ${className}`;

  const handleMouseEnter = () => {
    gsap.to(item1Ref.current, { y: "-100%", duration: 0.4, ease: "power2.out" });
    gsap.to(item2Ref.current, { y: "-100%", duration: 0.4, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(item1Ref.current, { y: "0%", duration: 0.4, ease: "power2.out" });
    gsap.to(item2Ref.current, {
      y: "0%",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const content = (
    <div
      ref={containerRef}
      className="flex h-7 cursor-pointer flex-col items-center justify-start overflow-hidden text-center"
      
    >
      <div
        ref={item1Ref}
        className="flex min-h-[1.875rem] items-center justify-center"
        style={{ transform: "translateY(0%)" }}
      >
        {children}
      </div>
      <div
        ref={item2Ref}
        className="flex min-h-[1.875rem] items-center justify-center"
        style={{ transform: "translateY(0%)" }}
      >
        {children}
      </div>
    </div>
  );

  return href ? (
    <Link to={href} className={combined} onClick={onClick} onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      {content}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={combined}>
      {content}
    </button>
  );
}
