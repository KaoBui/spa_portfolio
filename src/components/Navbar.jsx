import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [showHamburger, setShowHamburger] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHamburger(!entry.isIntersecting); // if Navbar not visible => show hamburger
      },
      {
        root: null,
        threshold: 0.1,
      },
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (showHamburger) {
      gsap.to(buttonRef.current, {
        width: "48px", // 12 * 4px = 48px
        padding: "12px", // same as p-3
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
      });
    } else {
      gsap.to(buttonRef.current, {
        width: "0px",
        padding: "12px 0",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [showHamburger]);

  return (
    <>
      <header
        ref={headerRef}
        className="absolute top-0 left-0 z-[100] w-full px-6 py-6 transition-all md:px-8 lg:px-12 2xl:px-16"
      >
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-lg font-bold">
            KAO BUI
          </Link>

          <div className="hidden gap-6 md:flex">
            <a href="#footer" className="hover:underline">
              contacts
            </a>
            <a href="#about" className="hover:underline">
              about
            </a>
            <a href="#projects" className="hover:underline">
              projects
            </a>
          </div>
        </nav>
      </header>

      {/* Hamburger Button */}
      <button
        ref={buttonRef}
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-6 right-6 z-[300] overflow-hidden rounded-md bg-black text-white md:right-8 lg:right-12 2xl:right-16"
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6H21M3 12H21M3 18H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-[150] bg-black opacity-[0.5] transition-opacity duration-300"
        />
      )}

      {/*Menu Overlay */}
      <div
        className={`fixed top-0 right-0 z-[200] flex h-full w-3/4 max-w-xs transform flex-col gap-8 bg-white p-8 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Mobile menu links */}
        <Link
          onClick={() => setMenuOpen(false)}
          to="/"
          className="text-xl font-semibold"
        >
          home
        </Link>
        <a
          href="#footer"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-semibold"
        >
          contacts
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-semibold"
        >
          about
        </a>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-semibold"
        >
          projects
        </a>
      </div>
    </>
  );
}
