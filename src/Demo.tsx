import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
const Demo = () => {
  const [open, setOpen] = useState(false);
  const name = "Akash Kurdekar".split("");
  useEffect(() => {
    gsap.set(".heading", {
      clipPath: "inset(0 100% 0 0)",
    });
    gsap.to(".heading", {
      clipPath: "inset(0 0% 0 0)",
      duration: 2,
      ease: "power1.inOut",
    });
    gsap.set(".line", {
      width: 0,
    });
    gsap.set(".desc", {
      filter: "blur(5px)",
    });
    gsap.to(".line", {
      width: "80px",
      duration: 2,
      ease: "power1.inOut",
    });
    gsap.to(".desc", {
      filter: "blur(0)",
      duration: 0.5,
      ease: "power1.inOut",
    });

    const letters = gsap.utils.toArray(".name-letter");

    gsap.set(letters, {
      yPercent: 120,
    });

    gsap.to(letters, {
      yPercent: 0,
      stagger: 0.04,
      ease: "power4.out",
    });
  });
  return (
    <main>
      <header className="fixed top-0 left-0 z-50 w-full bg-black border-b border-white/10">
        <nav className="flex items-center justify-between h-20 px-20">
          {/* Logo */}
          <h1 className="font-serif italic tracking-[-8px] text-4xl text-white uppercase">
            <span className="text-[#A71414]">A</span>K
          </h1>

          {/* Sections */}
          <ul className="flex items-center gap-10">
            {["PROJECTS", "CERTIFICATES", "CONTACT"].map((item) => (
              <li
                key={item}
                className="font-space text-[10px] uppercase tracking-[0.3em] text-white/70 hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Date */}
          <div className="text-right">
            <p className="font-space text-xs text-white/50">05:24:00 PM</p>
          </div>
        </nav>
      </header>
      <section className="relative h-screen overflow-hidden bg-[#A71414] px-20">
        {/* Slide Panel */}
        <aside
          className={`absolute right-0 top-0 h-full bg-black border-l border-white/10
  transition-all duration-700 ease-[cubic-bezier(.76,0,.24,1)]
  ${open ? "w-[420px]" : "w-20"}`}
        >
          <div className="relative h-full">
            {/* Vertical Text */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="rotate-90 flex items-center whitespace-nowrap">
                {["Developer", "Creator", "Gamer", "Traveller"].map(
                  (item, index, arr) => (
                    <React.Fragment key={item}>
                      <span className="font-space text-[11px] uppercase tracking-[0.35em] text-white/80">
                        {item}
                      </span>

                      {index !== arr.length - 1 && (
                        <span className="mx-4 h-1.5 w-1.5 rounded-full bg-[#A71414]" />
                      )}
                    </React.Fragment>
                  )
                )}
              </div>
            </div>

            {/* Menu Content */}
            <div
              className={`absolute inset-0 p-12 transition-all duration-500 ${
                open
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10 pointer-events-none"
              }`}
            >
              <h2 className="font-serif text-5xl italic text-white">
                About Me
              </h2>

              <p className="mt-6 text-white/70">
                This is where your content will go...
              </p>
            </div>

            {/* Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center cursor-pointer group z-20"
            >
              <span
                className={`absolute  w-10 transition-all duration-500 ease-[cubic-bezier(.76,0,.24,1)] ${
                  open
                    ? "rotate-45 scale-90 bg-[#A71414]  h-1"
                    : "-translate-y-1.5 group-hover:w-12 bg-white h-px"
                }`}
              />

              <span
                className={`absolute  w-10  transition-all duration-500 ease-[cubic-bezier(.76,0,.24,1)] ${
                  open
                    ? "-rotate-45 scale-90 bg-[#A71414] h-1"
                    : "translate-y-1.5 group-hover:w-12 bg-white h-px"
                }`}
              />
            </button>
          </div>
        </aside>
        {/* Main */}
        <div className=" flex h-full  items-end  pb-20">
          <div className="">
            <span className="heading mb-6 inline-block font-space text-sm uppercase tracking-[0.45em] text-white/70 font-bold">
              Who am I?
            </span>

            <h1 className="font-serif italic text-[170px] leading-[0.88] text-white perspective-[1000px]">
              {name.map((char, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <span className="name-letter inline-block">
                    {char === " " ? "\u00A0" : char}
                  </span>
                </span>
              ))}
            </h1>

            <div className="mt-6 flex items-center gap-4">
              <span className="font-space text-xl text-white/70">{"</>"}</span>

              <div className="line h-px  bg-white/30" />

              <p className="font-space text-xl uppercase tracking-[0.25em] text-white">
                Software Engineer
              </p>
            </div>

            <p className=" desc mt-8 max-w-md font-space text-[15px] leading-8 text-white/75">
              Building fast, animated and pixel-perfect digital experiences with
              React, GSAP and thoughtful interaction design.
            </p>
          </div>
        </div>
        {/* Huge Background Text */}
        {/* <h2 className="pointer-events-none absolute bottom-10 right-28 font-serif italic text-[320px] leading-none text-white/[0.04]">
          01
        </h2> */}
      </section>
      <section className="bg-[#F6F2EC] text-black min-h-screen px-20 py-24">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <p className="font-space text-xs uppercase tracking-[0.3em] text-[#A71414]">
              02 / PROJECTS
            </p>

            <h2 className="font-space text-[90px] leading-[0.9] font-bold mt-3">
              Selected
              <br />
              Work<span className="text-[#A71414]">.</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="font-space text-sm leading-7 text-black/70">
              A collection of products I've designed and developed with
              attention to detail, motion and user experience.
            </p>
            <button className="group mt-8 flex items-center gap-2 font-serif italic text-lg">
              <span className="relative">
                View All Projects
                <span className="absolute -bottom-1 left-0 h-px w-full bg-[#A71414]" />
              </span>

              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-20 mt-24">
          {[1, 2, 3, 4].map((item) => (
            <article key={item} className="group cursor-pointer">
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/project.jpg"
                  alt=""
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Number */}
              <span className="block mt-5 font-space text-xs text-[#A71414]">
                0{item}
              </span>

              {/* Title */}
              <h3 className="text-4xl font-semibold mt-2">Green Mind UAE</h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-7 text-black/70 max-w-md">
                Mental health platform focused on awareness, booking and online
                therapy.
              </p>

              {/* Tags */}
              <div className="flex gap-2 mt-6 flex-wrap">
                {["React", "TypeScript", "GSAP", "Node"].map((tag) => (
                  <span
                    key={tag}
                    className="border rounded-full px-3 py-1 text-[10px] uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Demo;
