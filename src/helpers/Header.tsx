import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  useLayoutEffect(() => {
    gsap.set(".header", {
      scale: 1.3,
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
  }, []);
  return (
    <header className="header fixed top-8 left-8 z-20 select-none flex flex-col  items-end  gap-1 ">
      <h1 className="text-[22px]  font-black uppercase leading-none text-mina tracking-[5px] mix-blend-difference">
        Imran
      </h1>

      <h1 className=" text-[22px]  font-black uppercase leading-none text-mest tracking-[5px] mix-blend-difference">
        Khan
      </h1>
    </header>
  );
};

export default Header;
