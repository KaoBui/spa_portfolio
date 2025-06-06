import { useRef } from "react";
import { useLocation } from "react-router";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const svgRef = useRef();
  const footerRef = useRef();
  const location = useLocation();
  const pathname = location.pathname;

  // useGSAP(
  //   () => {
  //     const footerTrigger = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: footerRef.current,
  //         start: "bottom 95%",
  //         toggleActions: "play reverse play reverse",
  //         markers: true,
  //       },
  //     });

  //     footerTrigger.fromTo(
  //       svgRef.current.querySelectorAll("path"),
  //       {
  //         yPercent: 50,
  //         ease: "power2.out",
  //       },
  //       {
  //         yPercent: 0,
  //         ease: "power2.out",
  //         stagger: 0.02,
  //       },
  //     );
  //   },
  //   { dependencies: [pathname], scope: footerRef, revertOnUpdate: true },
  // );

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="footer flex h-screen flex-col items-start justify-end gap-24 px-6 pb-0 text-dark md:px-8 lg:px-12 2xl:px-16"
    >
      <div className="flex flex-col items-start gap-0">
        <p className="text-2">Let's start creating</p>
        <p className="text-3 md:text-5 leading-none font-bold tracking-tighter">
          contact<br></br>@kaobui.com
        </p>
      </div>
      <div className="relative flex h-[25vh] w-full items-end justify-between overflow-hidden py-4 text-1">
        <p>
          &copy; {new Date().getFullYear()} Your Portfolio Name. All rights
          reserved.
        </p>
        <p>Lyon, France</p>
        <p>Designed and developped by Kao</p>
        <div className="absolute bottom-0 left-0 -z-1 h-[200px] w-full overflow-hidden">
          <svg
            ref={svgRef}
            className="opacity-[0.15]"
            viewBox="0 0 872 216"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="letter-K"
              d="M21.772 211H0.247V4.93398H21.772V104.236L119.352 4.93398H144.321L43.871 107.68L147.191 211H119.352L21.772 114.281V211Z"
            />
            <path
              id="letter-A"
              d="M293.622 211L272.097 153.887H175.952L154.14 211H132.902L212.975 4.93398H236.509L316.295 211H293.622ZM224.168 27.894L182.553 136.38H265.209L224.168 27.894Z"
            />
            <path
              id="letter-O"
              d="M397.368 215.305C337.672 215.305 293.474 167.663 293.474 107.68C293.474 47.697 337.672 0.628989 397.368 0.628989C457.064 0.628989 501.549 47.697 501.549 107.68C501.549 167.663 457.064 215.305 397.368 215.305ZM397.368 196.076C446.158 196.076 479.163 157.044 479.163 107.68C479.163 58.316 446.158 19.858 397.368 19.858C348.865 19.858 315.573 58.316 315.573 107.68C315.573 157.044 348.865 196.076 397.368 196.076Z"
            />
            <path
              id="letter-B"
              d="M677.105 153.313C677.105 190.049 650.127 211 609.66 211H538.484V4.93398H605.355C645.248 4.93398 668.782 24.163 668.782 58.029C668.782 78.406 655.867 95.913 634.916 103.662C662.755 110.55 677.105 128.631 677.105 153.313ZM604.207 22.441H558.574V95.913H604.207C632.046 95.913 647.831 82.137 647.831 59.177C647.831 36.217 632.046 22.441 604.207 22.441ZM608.512 113.42H558.574V193.493H608.512C638.647 193.493 656.441 178.569 656.441 152.739C656.441 128.057 638.647 113.42 608.512 113.42Z"
            />
            <path
              id="letter-U"
              d="M832.534 4.93398V140.398C832.534 186.605 802.686 215.305 757.34 215.305C711.707 215.305 681.859 186.605 681.859 140.398V4.93398H703.384V141.546C703.384 175.125 725.483 196.076 757.34 196.076C789.197 196.076 811.009 175.125 811.009 141.546V4.93398H832.534Z"
            />
            <path id="letter-I" d="M871.169 211H849.644V4.93398H871.169V211Z" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
