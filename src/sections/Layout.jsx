import { useRef, useState } from "react";
import { useLocation } from "react-router";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { projects } from "../projectsInfo";

export default function Layout({ children }) {
  const location = useLocation();
  const pathname = location.pathname;
  const pageRef = useRef();
  const layoutRef = useRef();
  const maskRef = useRef();
  const alreadyAnimated = sessionStorage.getItem("heroAnimated");

  // MATCH PROJECT NAME
  const project = projects.find((p) => p.url === pathname);
  const pageName = project?.name ?? "Home";

  useGSAP(
    () => {
      const tl = gsap.timeline();
      if (alreadyAnimated) {
        // Exit animation
        tl.to(layoutRef.current, {
          opacity: 0,
          duration: 0.2,
          ease: "power2.inOut",
        })
          .to(
            maskRef.current,
            {
              duration: 1,
              ease: "power3.inOut",
              "--b": "100%",
            },
            "<+0",
          )
          .to(
            maskRef.current,
            {
              duration: 0.5,
              ease: "power3.inOut",
              "--a": "200%",
            },
            "<+0.5",
          )
          .to(
            maskRef.current,
            {
              duration: 0.5,
              ease: "power3.inOut",
              "--c": "50%",
            },
            "<+0.25",
          )
          .to(layoutRef.current, {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out",
          })
          .to(maskRef.current, {
            duration: 0.5,
            ease: "power3.inOut",
            "--c": "0%",
          })
          .to(
            maskRef.current,
            {
              duration: 0.5,
              ease: "power3.inOut",
              "--a": "60%",
            },
            "<+0.25",
          )
          .to(
            maskRef.current,
            {
              duration: 1,
              ease: "power3.inOut",
              "--b": "0%",
            },
            "<+0",
          );
      }
      tl.to(layoutRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    },
    { dependencies: [location.pathname], scope: pageRef },
  );

  return (
    <div ref={pageRef}>
      <div
        ref={maskRef}
        className="fixed inset-0 z-[1000] mb-0 flex items-center justify-center bg-black"
        style={{
          clipPath: "ellipse(var(--a) var(--b) at 50% var(--c))",
          "--a": "60%",
          "--b": "0%",
          "--c": "100%",
        }}
      >
        <p className="text-4 text-white uppercase"> {pageName}</p>
      </div>
      <div
        ref={layoutRef}
        className="layout relative space-y-40 px-6 opacity-0 md:px-8 lg:px-12 2xl:px-16 3xl:px-20"
      >
        {children}
      </div>
    </div>
  );
}
