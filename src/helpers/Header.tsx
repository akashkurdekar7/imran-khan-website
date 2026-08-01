import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  useLayoutEffect(() => {
    gsap.set(".header", {
      scale: 1.3,
    });
    gsap.set(".header-text", {
      color: "#000",
    });

    gsap.to(".header", {
      scale: 1,
      color: "#fff",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero", // or ".hero"
        start: "top top",
        end: "+=100%",
        scrub: true,
      },
    });
    gsap.to(".header-text", {
      color: "#fff",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero", // or ".hero"
        start: "top top",
        end: "+=10%",
        scrub: true,
      },
    });
  }, []);
  return (
    <header className="header fixed top-5 left-5 md:top-8 md:left-8 z-20 select-none flex flex-col  items-end ">
      <h1 className="text-[14px] md:text-[22px] text-detai uppercase leading-none  header-text">
        Imran
      </h1>

      <h1 className=" text-[14px] md:text-[22px] text-lux uppercase leading-none  tracking-[0.5em] orange">
        Khan
      </h1>
    </header>
  );
};

export default Header;
