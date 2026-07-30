import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDribbble,
  FaBehance,
  FaTwitter,
  FaYoutube,
  FaDiscord,
  FaFigma,
  FaFacebook,
} from "react-icons/fa";

const icons = [
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDribbble,
  FaBehance,
  FaTwitter,
  FaYoutube,
  FaDiscord,
  FaFigma,
  FaFacebook,
];

const cards = [
  { x: -360, rotate: -14, scale: 0.84 },
  { x: -180, rotate: -7, scale: 0.92 },
  { x: 0, rotate: 0, scale: 1 },
  { x: 180, rotate: 7, scale: 0.92 },
  { x: 360, rotate: 14, scale: 0.84 },
];

const Author = () => {
  const [iconIndex, setIconIndex] = useState(0);
  const iconRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  useLayoutEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;

      cardsRef.current.forEach((card, i) => {
        gsap.to(card, {
          x: cards[i].x + x * (i - 2),
          duration: 0.8,
          ease: "power3.out",
        });
      });
    });
  }, []);
  useLayoutEffect(() => {
    cardsRef.current.forEach((card, index) => {
      const enter = () => {
        gsap.to(card, {
          y: -20,
          scale: cards[index].scale + 0.05,
          rotation: 0,
          duration: 0.35,
          ease: "power2.out",
          zIndex: 100,
        });
        gsap.to(".glow", {
          scale: 1.15,
          repeat: -1,
          yoyo: true,
          duration: 4,
        });
        gsap.to(card.querySelector(".card-image"), {
          scale: 1.04,
          duration: 0.35,
          ease: "power2.out",
        });
      };

      const leave = () => {
        gsap.to(card, {
          y: 0,
          rotation: cards[index].rotate,
          scale: cards[index].scale,
          duration: 0.35,
          ease: "power2.out",
          zIndex: 10 - Math.abs(index - 2),
        });

        gsap.to(card.querySelector(".card-image"), {
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);

      return () => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      };
    });
  }, []);
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      gsap.to(iconRef.current, {
        opacity: 0,
        scale: 0.6,
        duration: 0.18,
        onComplete: () => {
          setIconIndex((prev) => (prev + 1) % icons.length);
          gsap.fromTo(
            iconRef.current,
            {
              opacity: 0,
              scale: 1.4,
              rotate: gsap.utils.random(-20, 20),
            },
            {
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 0.28,
              ease: "back.out(2)",
            }
          );
        },
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);
  const Icon = icons[iconIndex];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#f5f2eb] overflow-hidden px-6">
      <div className="mb-14 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          <div ref={iconRef} className="flex justify-center text-neutral-900">
            <Icon size={42} />
          </div>
        </p>

        <h2 className="mt-4 text-6xl font-bold tracking-tight text-neutral-900">
          what’s up On Socials
        </h2>
      </div>
      <div className="relative flex items-end justify-center h-[650px] w-full max-w-[1400px]">
        <div className="absolute w-[700px] h-[700px] rounded-full bg-orange-200/30 blur-[150px]" />
        {cards.map((_, i) => {
          const transforms = [
            "-translate-x-[340px] rotate-[-14deg] translate-y-10",
            "-translate-x-[170px] rotate-[-7deg] translate-y-5",
            "translate-x-0 z-50",
            "translate-x-[170px] rotate-[7deg] translate-y-5",
            "translate-x-[340px] rotate-[14deg] translate-y-10",
          ];

          return (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el!;
              }}
              className="absolute h-[580px] w-[320px] overflow-hidden rounded-[40px] shadow-2xl cursor-pointer"
            >
              <img
                src={`https://picsum.photos/400/700?random=${i}`}
                className="card-image h-full w-full object-cover"
              />
            </div>
          );
        })}
      </div>{" "}
      <div className="mt-14 text-center">
        <p className="text-neutral-500">Follow Akash on social media</p>
        <ul className="flex gap-2 items-center justify-center text-mina text-[18px]">
          <li className="text-mina">instagram</li>
          <li>instagram</li>
          <li>instagram</li>
          <li>instagram</li>
        </ul>
      </div>
    </section>
  );
};

export default Author;
