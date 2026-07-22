import { useLayoutEffect, useRef } from "react";
import heroImage from "/hero.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const pinRef = useRef(null);
  const aboutRef = useRef(null);
  const contentRef = useRef(null);

  
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
  scrollTrigger: {
    trigger: pinRef.current,
    start: "top top",
    end: "+=200%",
    pin: true,
    scrub: true,
  },
});
gsap.set(aboutRef.current, {
  yPercent: 100,
});
gsap.set(".marquee-left", {
  clipPath: "inset(0 50% 0 0)"
});

gsap.set(".marquee-right", {
  clipPath: "inset(0 0 0 50%)"
});
gsap.set(".year", {
	scale:5,
	opacity:0,
});
   tl.to(contentRef.current,{
    scale:.3,
    background:"#fff403",
    borderRadius:10,
    ease: "none",
},0);
  
tl.to(
  aboutRef.current,
  {
    yPercent: 0,
    ease: "none",
  },
  0
);
tl.to(".year", {
	scale:1,
	opacity:1,
  y: -30,
  ease: "power2.out",
}, 0);
tl.to(".hero-hide", {
  opacity: 0,
  y: -30,
  ease: "power2.out",
  duration: 0.1,
}, 0.09);

gsap.to(".marquee-left", {
  clipPath: "inset(0 0% 0 0)",
  duration: 1,
  ease: "power3.out"
});
gsap.to(".marquee-left", {
  x: "-=100%",
  duration: 20,
  repeat: -1,
  ease: "none",
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % window.innerWidth)
  }
});
gsap.to(".marquee-right", {
  clipPath: "inset(0 0 0 0)",
  duration: 1,
  ease: "power3.out"
});
gsap.to(".marquee-right", {
  x: "50%",
  duration: 20,
  ease: "none",
  repeat: -1,
});
  });

  return () => ctx.revert();
}, []);
  return (
    <div ref={heroRef} className="relative ">
      <section ref={pinRef} className="relative h-screen overflow-hidden z-30">
<div className="h-full relative" ref={contentRef} >
	<span className="year absolute -top-40 left-1/2  -translate-x-1/2 text-mina text-[56px] tracking-[2px]">2008</span>
      <div className="hero-hide absolute top-8 right-8 md:top-10 md:right-10">
        <ul className="flex flex-col items-end gap-2 uppercase text-right ">
          <li className="text-[12px]  font-medium tracking-[0.35em] leading-none text-mina">
            Actor
          </li>

          <li className="text-[14px] font-medium tracking-[0.35em] leading-none text-mina">
            Since 2008
          </li>

          <li className="text-[14px] font-medium tracking-[0.35em] leading-none text-mina">
            India
          </li>
        </ul>
      </div>
     <div  
     className="  w-full h-full flex items-end justify-center">
      <div className="relative  overflow-visible ">

          <div  className="hero-hide absolute bottom-0 -left-80 flex flex-col text-mina uppercase gap-4">
    <span className="text-[90px] leading-none ">The</span>
    <span className="text-[90px] leading-none">Boy</span>
    <span className="text-[90px]   leading-none">Next</span>
    <span className="text-[90px]  leading-none">Door</span>
  </div>


  <img
    src={heroImage}
    alt="Imran Khan"
    className="w-[90vh] h-auto object-contain"
    />

    <div className=" hero-hide absolute top-1/2 -translate-y-1/2 -right-72 flex flex-col items-start z-20">
  <span className="text-mina text-[90px] leading-[20px]">"</span>
<p className="text-mest text-[24px] leading-[1.35] ">
  Lorem ipsum dolor sit amet,
  <br />
  consectetur adipisicing elit.
  <br />
  Nostrum, ab?
</p>
  <div className="w-20 h-[2px] bg-black/20 mt-3" />
</div>


    </div>

</div>
</div>
    </section>
<section
  ref={aboutRef}
  className="fixed inset-0 h-screen z-10 overflow-hidden flex flex-col justify-center gap-12"
>
  <div className="overflow-hidden">
    <div className="marquee-left whitespace-nowrap flex">
  <p className="text-[90px] uppercase text-mina px-10 shrink-0">
    Actor • Director • Writer • Producer •
  </p>

  <p className="text-[90px] uppercase text-mina px-10 shrink-0">
    Actor • Director • Writer • Producer •
  </p>
</div>
  </div>

  <div className="overflow-hidden">
		<div className="marquee-right whitespace-nowrap flex">
  <p className="text-[90px] uppercase text-mina px-10 shrink-0">
		Jaane Tu • Delhi Belly • Luck • Kidnap • I Hate Luv Storys • Jaane Tu • Delhi Belly •
  </p>
  <p className="text-[90px] uppercase text-mina px-10 shrink-0">
		Jaane Tu • Delhi Belly • Luck • Kidnap • I Hate Luv Storys • Jaane Tu • Delhi Belly •
  </p>
</div>
  </div>
</section>
    </div>
  );
};

export default Hero;