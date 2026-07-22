import image1 from "/public/article/image1.png"
import image2 from "/public/article/image2.png"
import image3 from "/public/article/image3.png"
import image4 from "/public/article/image4.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


const Article = () => {
const sectionRef = useRef<HTMLDivElement>(null);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {

    // Images start hidden
    gsap.set(".reveal-image", {
      clipPath: "inset(0 100% 0 0)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "center center",
        scrub: true,
        markers:true,
      },
    });

    // Text fills
    tl.to(".reveal-text", {
      color: "#F5F1E8",
      stagger: 0.08,
      ease: "none",
    });

    // Images reveal
    tl.to(
      ".reveal-image",
      {
        clipPath: "inset(0 0% 0 0)",
        stagger: 0.15,
        ease: "power2.out",
      },
      0
    );

  }, sectionRef);

  return () => ctx.revert();
}, []);
  return (
    <section 
    ref={sectionRef}
    className="min-h-screen bg-[#000000] flex items-center justify-center px-8">
        <div className=" mx-auto text-center">

        <div className="flex flex-wrap items-center  flex-col justify-center gap-6 
tracking-tight text-[90px] xl:text-[150px] text-white uppercase leading-none text-mest">

<div className="flex items-center justify-center gap-8 w-full ">
          <span className="text-mest reveal-text leading-none">Some</span>

         <div className=" border border-white overflow-hidden rounded-full shrink-0">
    <video
      className="reveal-video w-full h-full object-cover"
      src="/article/video1.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>

          <span className="text-mina reveal-text leading-none">Movies</span>
</div>

<div className="flex items-center justify-center gap-8 w-full ">

          <span className="text-mest reveal-text">Become</span>

          <span className="text-mest reveal-text">Famous</span>

        <div className=" border border-white overflow-hidden rounded-full shrink-0">
    <video
      className="reveal-video w-full h-full object-cover"
      src="/article/video1.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>

</div>

<div className="flex items-center justify-center gap-8 w-full ">

         <span className="text-mest reveal-text">Some</span>
          <div className=" border border-white overflow-hidden rounded-full shrink-0">
    <video
      className="reveal-video w-full h-full object-cover"
      src="/article/video1.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
          <span className="text-mest reveal-text leading-none">Become</span>
          <span className="text-mest reveal-text leading-none">A</span>
    </div>

<div className="flex items-center justify-center gap-8 w-full ">

          <span className="text-mina reveal-text leading-none">Memory</span>
        <div className=" border border-white overflow-hidden rounded-full shrink-0">
    <video
      className="reveal-video w-full h-full object-cover"
      src="/article/video1.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
</div>
        </div>

      </div>
    </section>
  );
};

export default Article;