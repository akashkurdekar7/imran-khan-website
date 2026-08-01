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

const socials = [
  {
    title: "Instagram",
    handle: "@akash.jpg",
    color: "#E1306C",
    image: "https://picsum.photos/500/800?random=11",
    Icon: FaInstagram,
  },
  {
    title: "LinkedIn",
    handle: "Akash Kurdekar",
    color: "#0A66C2",
    image: "https://picsum.photos/500/800?random=12",
    Icon: FaLinkedin,
  },
  {
    title: "Github",
    handle: "akashkurdekar",
    color: "#111111",
    image: "https://picsum.photos/500/800?random=13",
    Icon: FaGithub,
  },
  {
    title: "Dribbble",
    handle: "@akash",
    color: "#EA4C89",
    image: "https://picsum.photos/500/800?random=14",
    Icon: FaDribbble,
  },
  {
    title: "Behance",
    handle: "@akash",
    color: "#1769FF",
    image: "https://picsum.photos/500/800?random=15",
    Icon: FaBehance,
  },
  {
    title: "Twitter",
    handle: "@akash",
    color: "#1DA1F2",
    image: "https://picsum.photos/500/800?random=16",
    Icon: FaTwitter,
  },
  {
    title: "Youtube",
    handle: "@akash",
    color: "#FF0000",
    image: "https://picsum.photos/500/800?random=17",
    Icon: FaYoutube,
  },
  {
    title: "Discord",
    handle: "@akash",
    color: "#5865F2",
    image: "https://picsum.photos/500/800?random=18",
    Icon: FaDiscord,
  },
  {
    title: "Figma",
    handle: "@akash",
    color: "#A259FF",
    image: "https://picsum.photos/500/800?random=19",
    Icon: FaFigma,
  },
  {
    title: "Facebook",
    handle: "@akash",
    color: "#1877F2",
    image: "https://picsum.photos/500/800?random=20",
    Icon: FaFacebook,
  },
];

const SocialsMobile = () => {
  const [active, setActive] = useState(0);

  const iconRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const touchStart = useRef(0);

  /* entrance */
  useLayoutEffect(() => {
    gsap.from(".mobile-heading", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(cardsRef.current, {
      y: 140,
      opacity: 0,
      scale: 0.8,
      rotate: 8,
      stagger: 0.08,
      duration: 0.9,
      ease: "power4.out",
    });
  }, []);

  /* floating */
  useLayoutEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.to(card, {
        y: -8,
        duration: 2 + i * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  /* animated icon */
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      gsap.to(iconRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.18,
        onComplete: () => {
          setActive((prev) => (prev + 1) % socials.length);

          gsap.fromTo(
            iconRef.current,
            {
              opacity: 0,
              scale: 1.5,
              rotate: gsap.utils.random(-30, 30),
            },
            {
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 0.35,
              ease: "back.out(2)",
            }
          );
        },
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  /* animate cards when active changes */
  useLayoutEffect(() => {
    cardsRef.current.forEach((card, i) => {
      const diff = i - active;

      gsap.to(card, {
        x: diff * 70,
        scale: diff === 0 ? 1 : 0.88,
        opacity: Math.abs(diff) > 1 ? 0 : 1,
        rotate: diff * 8,
        zIndex: 20 - Math.abs(diff),
        duration: 0.45,
        ease: "power3.out",
      });
    });
  }, [active]);

  /* autoplay */
  useLayoutEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % socials.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;

    if (diff > 60) {
      setActive((prev) => (prev + 1) % socials.length);
    }

    if (diff < -60) {
      setActive((prev) => (prev === 0 ? socials.length - 1 : prev - 1));
    }
    const Icon = socials[active].Icon;

    return (
      <section className="min-h-screen overflow-hidden bg-[#f5f2eb] px-6 py-16 flex flex-col justify-between">
        {/* Heading */}
        <div className="mobile-heading text-center">
          <div ref={iconRef} className="flex justify-center mb-5">
            <Icon
              size={42}
              color={socials[active].color}
              className="drop-shadow-xl"
            />
          </div>

          <p className="text-lux tracking-[0.35em] text-[13px] uppercase">
            What's up on
          </p>

          <h2 className="text-detai text-[64px] leading-none orange">
            Socials
          </h2>
        </div>

        {/* Cards */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative h-[540px] flex items-center justify-center"
        >
          <div className="absolute w-[320px] h-[320px] rounded-full bg-orange-300/20 blur-[100px]" />

          {socials.map((social, i) => {
            const Icon = social.Icon;

            return (
              <div
                key={social.title}
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
                onClick={() => setActive(i)}
                className="absolute w-[260px] h-[430px] rounded-[34px] overflow-hidden shadow-2xl bg-white cursor-pointer"
              >
                <img
                  src={social.image}
                  alt={social.title}
                  className="card-image h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Icon size={34} color={social.color} className="mb-3" />

                  <h3 className="text-[24px] text-detai">{social.title}</h3>

                  <p className="text-xs tracking-[0.3em] uppercase text-lux mt-1">
                    {social.handle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center space-y-5">
          <p className="text-lux tracking-[0.28em] uppercase text-[14px]">
            Swipe to explore
          </p>

          <div className="flex justify-center gap-2">
            {socials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-orange-500" : "w-2 bg-neutral-400"
                }`}
              />
            ))}
          </div>

          <button className="mt-3 rounded-full bg-black px-8 py-3 text-white text-sm tracking-[0.3em] uppercase">
            Follow
          </button>
        </div>
      </section>
    );
  };
};

export default SocialsMobile;
