import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const video1 = "/article/video1.mp4";
const video2 = "/article/video2.mp4";
const video3 = "/article/video3.mp4";
const video4 = "/article/video4.mp4";
const Article = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".reveal-video", {
        clipPath: "inset(0 100% 0 0)",
        scale: 0.9,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "center center",
          scrub: true,
        },
      });

      tl.to(".reveal-text", {
        color: "#F5F1E8",
        stagger: 0.08,
        ease: "none",
      });

      tl.to(
        ".reveal-video",
        {
          clipPath: "inset(0 0% 0 0)",
          scale: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderVideo = ({ src }: { src: string }) => (
    <div className="reveal-video w-[180px] h-[90px] md:w-[240px] md:h-[120px] overflow-hidden rounded-full border border-white shrink-0">
      <video
        className="w-full h-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#000000] flex items-center justify-center px-8"
    >
      <div className=" mx-auto text-center">
        <div
          className="flex flex-wrap items-center  flex-col justify-center gap-6 
tracking-tight text-[90px] xl:text-[150px] text-white uppercase leading-none text-mest"
        >
          <div className="flex items-center justify-center gap-8 w-full ">
            <span className="text-mest reveal-text leading-none">Some</span>

            {renderVideo({ src: video1 })}

            <span className="text-mina reveal-text leading-none">Movies</span>
          </div>

          <div className="flex items-center justify-center gap-8 w-full ">
            <span className="text-mest reveal-text">Become</span>

            <span className="text-mest reveal-text">Famous</span>

            {renderVideo({ src: video2 })}
          </div>

          <div className="flex items-center justify-center gap-8 w-full ">
            <span className="text-mest reveal-text">Some</span>
            {renderVideo({ src: video3 })}
            <span className="text-mest reveal-text leading-none">Become</span>
            <span className="text-mest reveal-text leading-none">A</span>
          </div>

          <div className="flex items-center justify-center gap-8 w-full ">
            <span className="text-mina reveal-text leading-none">Memory</span>
            {renderVideo({ src: video4 })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
