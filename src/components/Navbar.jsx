import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HamburgerButton from "./HamburgerButton";
import  lenis  from "../lenis";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [showHamburger, setShowHamburger] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

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
    if (menuOpen) {
      lenis.stop();  // disable scroll
    } else {
      lenis.start(); // re-enable scroll
    }
  }, [menuOpen]);
  

  return (
    <>
      <header
        ref={headerRef}
        className="absolute top-0 left-0 z-[100] w-full px-6 py-6 transition-all  md:px-8 lg:px-12 2xl:px-16 3xl:px-20"
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
      <HamburgerButton
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        showHamburger={showHamburger}
      />

      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-[150] bg-black opacity-[0.5] transition-opacity duration-300"
        />
      )}

      {/*Menu Overlay */}
      <div
        className={`fixed top-0 right-0 z-[200] flex h-full w-3/4 max-w-sm transform flex-col gap-8 rounded-l-xl bg-white p-8 ${
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
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-semibold"
        >
          projects
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-semibold"
        >
          about
        </a>
        <a
          href="#footer"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-semibold"
        >
          contacts
        </a>
      </div>
    </>
  );
}
