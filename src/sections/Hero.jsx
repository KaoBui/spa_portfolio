import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PortraitPhoto from "../assets/img/portrait-2.jpg";
import Noise from "../assets/img/subtle-ht.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const heroRef = useRef();
  const heroTitleRef = useRef();
  const imgRef = useRef();
  const roleTitleRef = useRef();
  const locationRef = useRef();

  useGSAP(
    () => {
      const alreadyAnimated = sessionStorage.getItem("heroAnimated");

      if (!alreadyAnimated) {
        const paths = heroTitleRef.current.querySelectorAll("svg path");
        const roleEl = roleTitleRef.current;
        const words = roleEl.textContent.trim().split(" ");
        roleEl.innerHTML = words
          .map(
            (word) =>
              `<span class="word inline-block whitespace-nowrap overflow-hidden"><span class="inline-block overflow-hidden">${word}</span></span>`,
          )
          .join(" ");

        const locationDivs = heroRef.current.querySelectorAll(".location div");
        const presentation = heroRef.current.querySelectorAll(".presentation");

        const tl = gsap.timeline();
        tl.from(paths, {
          duration: 0.8,
          y: "100%",
          autoAlpha: 0,
          ease: "power4.out",
          stagger: 0.04,
          delay: 3.75,
        });
        tl.fromTo(
          imgRef.current,
          { clipPath: "inset(0 0 100% 0)" },
          {
            duration: 0.8,
            clipPath: "inset(0 0 0% 0)",
            ease: "power4.out",
          },
          "<+0.16",
        );
        tl.fromTo(
          roleEl.querySelectorAll(".word > span"),
          { opacity: 0, y: "100%" },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.25,
            ease: "power2.out",
          },
          "<+0.2",
        );
        tl.fromTo(
          locationDivs,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 0.6,
            ease: "power2.out",
          },
          "<+0.1",
        );
        tl.fromTo(
          presentation,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 0.6,
            ease: "power2.out",
          },
          "<+0.2",
        );
        tl.call(() => {
          sessionStorage.setItem("heroAnimated", "true");
        });
      }
    },
    { scope: heroRef },
  );

  useGSAP(
    () => {
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
        scale: 0.8,
        ease: "power1.out",
        filter: "blur(20px)",
        opacity: 0,
      });
    },
    { scope: heroRef },
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      className="flex h-dvh flex-col justify-end gap-20 py-6 text-center md:py-8 lg:py-12 2xl:py-12 3xl:py-16"
    >
      <div className="flex h-full grid-cols-12 flex-col-reverse items-end justify-between gap-0 md:grid md:h-auto">
        <div className="col-start-1 col-end-9 flex w-full flex-col justify-between gap-12 text-left">
          <div className="location flex gap-24 text-1">
            <div
              className="flex flex-col items-start"
              style={{ clipPath: "inset(0 0% 0 0)" }}
            >
              <p className="text-0 text-light">From</p>
              <p className="text-1">Hanoi, Vietnam</p>
            </div>
            <div
              className="flex flex-col items-start"
              style={{ clipPath: "inset(0 0% 0 0)" }}
            >
              <p className="text-0 text-light">Currently in</p>
              <p className="text-1">Lyon, France</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:gap-12 2xl:gap-12">
            <h4
              ref={roleTitleRef}
              className="flex gap-6 text-left text-2 text-dark md:text-3"
            >
              Designer & Developper
            </h4>
            <h1 ref={heroTitleRef} className="text-left">
              <svg viewBox="0 0 872 216" xmlns="http://www.w3.org/2000/svg">
                <path
                  id="letter-K"
                  d="M21.772 211H0.247V4.93398H21.772V104.236L119.352 4.93398H144.321L43.871 107.68L147.191 211H119.352L21.772 114.281V211Z"
                  fill="black"
                />
                <path
                  id="letter-A"
                  d="M293.622 211L272.097 153.887H175.952L154.14 211H132.902L212.975 4.93398H236.509L316.295 211H293.622ZM224.168 27.894L182.553 136.38H265.209L224.168 27.894Z"
                  fill="black"
                />
                <path
                  id="letter-O"
                  d="M397.368 215.305C337.672 215.305 293.474 167.663 293.474 107.68C293.474 47.697 337.672 0.628989 397.368 0.628989C457.064 0.628989 501.549 47.697 501.549 107.68C501.549 167.663 457.064 215.305 397.368 215.305ZM397.368 196.076C446.158 196.076 479.163 157.044 479.163 107.68C479.163 58.316 446.158 19.858 397.368 19.858C348.865 19.858 315.573 58.316 315.573 107.68C315.573 157.044 348.865 196.076 397.368 196.076Z"
                  fill="black"
                />
                <path
                  id="letter-B"
                  d="M677.105 153.313C677.105 190.049 650.127 211 609.66 211H538.484V4.93398H605.355C645.248 4.93398 668.782 24.163 668.782 58.029C668.782 78.406 655.867 95.913 634.916 103.662C662.755 110.55 677.105 128.631 677.105 153.313ZM604.207 22.441H558.574V95.913H604.207C632.046 95.913 647.831 82.137 647.831 59.177C647.831 36.217 632.046 22.441 604.207 22.441ZM608.512 113.42H558.574V193.493H608.512C638.647 193.493 656.441 178.569 656.441 152.739C656.441 128.057 638.647 113.42 608.512 113.42Z"
                  fill="black"
                />
                <path
                  id="letter-U"
                  d="M832.534 4.93398V140.398C832.534 186.605 802.686 215.305 757.34 215.305C711.707 215.305 681.859 186.605 681.859 140.398V4.93398H703.384V141.546C703.384 175.125 725.483 196.076 757.34 196.076C789.197 196.076 811.009 175.125 811.009 141.546V4.93398H832.534Z"
                  fill="black"
                />
                <path
                  id="letter-I"
                  d="M871.169 211H849.644V4.93398H871.169V211Z"
                  fill="black"
                />
              </svg>
            </h1>
          </div>
        </div>
        <div className="col-start-10 col-end-13 flex w-2/3 flex-col items-end justify-end gap-8 pt-6 md:w-auto md:pt-0 lg:items-start">
          <div
            ref={imgRef}
            style={{ clipPath: "inset(0 0 0% 0)" }}
            className="img-container relative aspect-square max-h-[20vh] w-2/3 overflow-hidden rounded-2xl md:max-h-full"
          >
            <div className="absolute inset-0 z-1 h-full w-full bg-black/25">
              <img className="h-full" src={Noise} alt="" />
            </div>
            <img
              className="h-full w-full object-cover object-top"
              src={PortraitPhoto}
              alt="Headshot photo"
            />
          </div>
          <p
            className="presentation text-right text-1 leading-[1.6] text-black md:text-left md:text-1"
            style={{ clipPath: "inset(0 0% 0 0)" }}
          >
            From design to development, I create interfaces that combine
            aesthetics, interactivity, and performance—built to serve both users
            and business needs.
          </p>
        </div>
      </div>
    </section>
  );
}
