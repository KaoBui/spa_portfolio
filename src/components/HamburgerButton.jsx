import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sling as Hamburger } from "hamburger-react";

export default function HamburgerButton({ menuOpen, setMenuOpen, showHamburger }) {
  const buttonRef = useRef(null);

  // Animate button entrance
  useEffect(() => {
    if (showHamburger) {
      gsap.to(buttonRef.current, {
        width: "auto",
        padding: "0",
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
      });
    } else {
      gsap.to(buttonRef.current, {
        width: "0px",
        padding: "0px",
        opacity: 1,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [showHamburger]);

  return (
    <button
      ref={buttonRef}
      aria-label="Toggle menu"
      className="fixed top-6 right-6 z-[300] bg-black text-white overflow-hidden rounded-md md:right-8 lg:right-12 2xl:right-16"
    >
      <Hamburger
        toggled={menuOpen}
        toggle={setMenuOpen}
        direction="right"
        size={24}
        color="#ffffff"
        rounded
        duration={0.5}
      />
    </button>
  );
}
