import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    src: "/article/video1.mp4",
    title: "Jaane Tu... Ya Jaane Na",
  },
  {
    src: "/article/video2.mp4",
    title: "I Hate Luv Storys",
  },
  {
    src: "/article/video3.mp4",
    title: "Break Ke Baad",
  },
  {
    src: "/article/video4.mp4",
    title: "Delhi Belly",
  },
];
const Article = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // gsap.set(".reveal-video", {
      //   clipPath: "inset(0 100% 0 0)",
      //   scale: 0.9,
      // });
      gsap.set(".reveal-video", {
        clipPath: "inset(0 100% 0 0)",
        y: 100,
        scale: 0.75,
        rotateY: 30,
        opacity: 0,
        filter: "blur(10px)",
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

      // tl.to(
      //   ".reveal-video",
      //   {
      //     clipPath: "inset(0 0% 0 0)",
      //     scale: 1,
      //     stagger: 0.15,
      //     ease: "power3.out",
      //   },
      //   0
      // );
      gsap.utils.toArray<HTMLElement>(".reveal-video").forEach((video) => {
        gsap.to(video, {
          clipPath: "inset(0 0% 0 0)",
          y: 0,
          scale: 1,
          rotateY: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: video,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
      gsap.fromTo(
        ".award-wrapper",
        {
          clipPath: "inset(0 0 100% 0)",
          y: 60,
          scale: 0.8,
          opacity: 0,
        },
        {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
            markers: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderVideo = ({ src, title }: { src: string; title: string }) => (
    <div
      data-cursor={title}
      className="
reveal-video
w-full
max-w-[320px]
sm:max-w-[380px]
md:max-w-[450px]
xl:max-w-[500px]
h-max
overflow-hidden
rounded-xl
md:rounded-2xl
border border-white/15
bg-neutral-900
shadow-[0_25px_80px_rgba(0,0,0,.45)]
"
    >
      <video
        className="block w-full h-auto object-cover"
        src={src}
        autoPlay
        muted
        loop
        preload="metadata"
        playsInline
      />
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className=" py-16
    md:py-24
    lg:py-32
    flex flex-col
    items-center
    justify-start
    px-4
    md:px-8"
    >
      <div className="award-wrapper w-[100px] mb-10 lg:mb-30 xl:mb-50 z-20">
        <img
          src="/award.svg"
          alt=""
          className="award w-full h-auto object-contain"
        />
      </div>
      <div
        className="flex flex-wrap items-center  flex-col justify-evenly gap-4 
tracking-tight size90 text-white uppercase leading-none text-mest gap-[50px]"
      >
        <div className="flex items-center justify-center gap-8 w-full ">
          <span className="text-mest reveal-text leading-none">Some</span>

          {renderVideo(videos[0])}

          <span className="text-mina reveal-text leading-none">Movies</span>
        </div>

        <div className="flex items-center justify-center gap-8 w-full ">
          <span className="text-mest reveal-text">Become</span>

          <span className="text-mest reveal-text">Famous</span>

          {renderVideo(videos[1])}
        </div>

        <div className="flex items-center justify-center gap-8 w-full ">
          <span className="text-mest reveal-text">Some</span>
          {renderVideo(videos[2])}

          <span className="text-mest reveal-text leading-none">Become</span>
          <span className="text-mest reveal-text leading-none">A</span>
        </div>

        <div className="flex items-center justify-center gap-8 w-full ">
          <span className="text-mina reveal-text leading-none">Memory</span>
          {renderVideo(videos[3])}
        </div>
      </div>
    </section>
  );
};

export default Article;
