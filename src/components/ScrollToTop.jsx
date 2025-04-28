// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";
import  lenis  from "../lenis";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    lenis.scrollTo(0, {
      duration: 0.5,
    });
  }, [pathname]);
  return null;
}
