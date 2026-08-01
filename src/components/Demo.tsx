import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Demo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const screen2Image = useRef<HTMLImageElement>(null);
  const screen3Image = useRef<HTMLImageElement>(null);
  const screen2Content = useRef<HTMLDivElement>(null);
  const screen3Content = useRef<HTMLDivElement>(null);
  const filmRef = useRef<HTMLDivElement>(null);
  const movies = [
    "Kidnap",
    "Luck",
    "I Hate Luv Storys",
    "Break Ke Baad",
    "Mere Brother Ki Dulhan",
    "Ek Main Aur Ekk Tu",
    "Matru Ki Bijlee Ka Mandola",
  ];

  useLayoutEffect(() => {
    if (!filmRef.current) return;

    const film = filmRef.current;

    const totalWidth = film.scrollWidth / 3;

    let currentX = -totalWidth;
    let targetSpeed = 0;
    let currentSpeed = 0;

    gsap.set(film, {
      x: currentX,
    });

    const handleMove = (e: MouseEvent) => {
      const mouse = e.clientX / window.innerWidth;

      // Left = -4
      // Middle = 0
      // Right = 4

      targetSpeed = gsap.utils.mapRange(0, 1, -4, 4, mouse);
      gsap.to(filmRef.current, {
        rotateY: gsap.utils.mapRange(0, window.innerWidth, -3, 3, e.clientX),
      });
    };

    window.addEventListener("mousemove", handleMove);

    const ticker = () => {
      // Smooth easing
      currentSpeed += (targetSpeed - currentSpeed) * 0.08;

      currentX -= currentSpeed;

      if (currentX <= -totalWidth * 2) {
        currentX += totalWidth;
      }

      if (currentX >= 0) {
        currentX -= totalWidth;
      }

      gsap.set(film, {
        x: currentX,
      });
    };

    gsap.ticker.add(ticker);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      gsap.ticker.remove(ticker);
    };
  }, []);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".screen2", { xPercent: -100 });
      gsap.set(".screen3", { xPercent: 100 });
      gsap.set(".film-strip", {
        yPercent: 120,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=180%",
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(
        ".screen2",
        { xPercent: -100 },
        { xPercent: 0, ease: "none", duration: 1 },
        0
      );

      tl.fromTo(
        ".screen3",
        { xPercent: 100 },
        { xPercent: 0, ease: "none", duration: 1 },
        0
      );

      // Images zoom while sliding
      tl.fromTo(
        screen2Image.current,
        {
          scale: 1.3,
          filter: "blur(10px)",
        },
        {
          scale: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          duration: 1,
        },
        0
      );

      tl.fromTo(
        screen3Image.current,
        {
          scale: 1.3,
          filter: "blur(10px)",
        },
        {
          scale: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          duration: 1,
        },
        0
      );

      // Text comes slightly later
      tl.fromTo(
        screen2Content.current,
        {
          x: -80,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
        },
        0.2
      );

      tl.fromTo(
        screen3Content.current,
        {
          x: 80,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
        },
        0.2
      );

      // Lift first screen
      tl.to(
        ".screen1",
        {
          yPercent: -100,
          ease: "power2.inOut",
          duration: 1,
        },
        0.75
      );
      tl.to(
        ".film-strip",
        {
          yPercent: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        1.5
      );
      tl.fromTo(
        ".bgWord",
        { scale: 1.3, opacity: 0 },
        { scale: 1, opacity: 0.08 },
        0
      );
      gsap.to(".projection-light", {
        xPercent: 100,
        repeat: -1,
        duration: 5,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      <h1
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
text-[18vw] font-black white/5 whitespace-nowrap pointer-events-none"
      >
        CHOCOLATE
      </h1>
      {/* Film Grain */}
      <div
        className="absolute inset-0 pointer-events-none z-50 opacity-10"
        style={{
          backgroundImage: "url('/grain.png')",
          mixBlendMode: "overlay",
        }}
      />
      {/* Screen 1 (BOTTOM) */}
      <div className="screen1 absolute inset-0 z-10 bg-[#FFE600] flex flex-col justify-between p-12">
        <div className="flex justify-between text-sm uppercase tracking-[.3em]">
          <span>2008 — 2015</span>
          <span>Actor</span>
        </div>

        <div>
          <h1 className="text-[9vw] leading-none font-black uppercase">
            IMRAN
          </h1>
          <h1 className="text-[9vw] leading-none font-black uppercase">KHAN</h1>
        </div>

        <div className="flex justify-between text-lg">
          <p>The Boy Next Door</p>
          <p>Scroll ↓</p>
        </div>
      </div>

      {/* Screen 2 (TOP) */}
      <div className="screen2 absolute left-0 top-0 z-20 w-1/2 h-full overflow-hidden">
        <img
          ref={screen2Image}
          src="/imran-1.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div
          ref={screen2Content}
          className="relative z-10 h-full flex flex-col justify-between p-12 white"
        >
          <div>
            <p className="tracking-[.4em] uppercase text-sm opacity-70">
              Personality
            </p>

            <h2 className="text-[5vw] font-black leading-none mt-8">
              CHARMING
            </h2>

            <h2 className="text-[5vw] font-black leading-none opacity-70">
              FUNNY
            </h2>

            <h2 className="text-[5vw] font-black leading-none opacity-40">
              ROMANTIC
            </h2>
          </div>

          <div className="flex gap-3 flex-wrap">
            <span className="border border-white/30 rounded-full px-5 py-2">
              Chocolate Boy
            </span>

            <span className="border border-white/30 rounded-full px-5 py-2">
              Icon
            </span>

            <span className="border border-white/30 rounded-full px-5 py-2">
              2000s
            </span>
          </div>
        </div>
      </div>

      {/* Screen 3 (TOP) */}
      <div className="screen3 absolute right-0 top-0 z-20 w-1/2 h-full overflow-hidden bg-[#f7f5f2]">
        <img
          ref={screen3Image}
          src="/imran-2.jpg"
          className="absolute right-0 bottom-0 h-[80%] object-contain"
        />

        <div
          ref={screen3Content}
          className="relative z-10 h-full flex flex-col justify-between p-12"
        >
          <div>
            <p className="tracking-[.4em] uppercase text-sm">Career</p>

            <div className="mt-12 space-y-10">
              <div>
                <h2 className="text-8xl font-black">12</h2>
                <p className="uppercase">Films</p>
              </div>

              <div>
                <h2 className="text-8xl font-black">2008</h2>
                <p className="uppercase">Debut</p>
              </div>

              <div>
                <h2 className="text-8xl font-black">♥</h2>
                <p className="uppercase">Fan Favourite</p>
              </div>
            </div>
          </div>

          <p className="text-xl italic max-w-xs">
            "Some actors become stars. Some become nostalgia."
          </p>
        </div>
      </div>
      {/* Bottom Film Strip */}
      <div
        className="film-strip absolute bottom-0 left-1/2 -translate-x-1/2 z-40 w-[120vw] overflow-hidden"
        style={{
          transform: "perspective(1200px) rotateX(12deg)",
        }}
      >
        <div className="projection-light absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <div className="relative bg-[#111] border-t border-white/10 py-3">
          {/* Top holes */}
          <div className="absolute top-1 left-0 flex w-full justify-between px-2 pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="h-4 w-4 rounded-sm bg-black border border-white/10"
              />
            ))}
          </div>

          {/* Bottom holes */}
          <div className="absolute bottom-1 left-0 flex w-full justify-between px-2 pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="h-4 w-4 rounded-sm bg-black border border-white/10"
              />
            ))}
          </div>

          <div
            ref={filmRef}
            className="flex gap-5 py-5 px-8 will-change-transform"
          >
            {[...movies, ...movies, ...movies].map((movie, i) => (
              <div
                key={i}
                className="film-card relative shrink-0 w-44 h-24 bg-neutral-900 border border-white/15 rounded-sm overflow-hidden transition-all
duration-500
hover:-translate-y-1
hover:scale-105
"
              >
                <div className="absolute top-2 right-2 text-[10px] white/60 tracking-widest">
                  FRAME {String(i + 1).padStart(3, "0")}
                </div>
                <img
                  src={`/posters/${(i % movies.length) + 1}.jpg`}
                  className="absolute inset-0 h-full w-full object-cover opacity-70"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-2 left-2 right-2">
                  <p className="white text-xs uppercase tracking-widest">
                    {movie}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
