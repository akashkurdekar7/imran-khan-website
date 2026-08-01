import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import star from "/stickers/star.png";
import tape from "/stickers/tape.png";
import whiteTape from "/stickers/white-tape.png";
import TextReveal from "../helpers/TextReveal";
gsap.registerPlugin(ScrollTrigger);
const slide1 = "/films/slide1.png";
const slide2 = "/films/slide2.png";
const slide3 = "/films/slide3.png";
const slide4 = "/films/slide4.png";
const slide5 = "/films/slide5.png";
const slide6 = "/films/slide6.png";
const slide7 = "/films/slide7.png";
const slide8 = "/films/slide8.png";
const slide9 = "/films/slide9.png";
const slide10 = "/films/slide10.png";
const slide11 = "/films/slide11.png";

const frames = [
  {
    image: slide1,
    x: "10%",
    y: "20%",
    w: 350,
    h: 500,
    rotate: -8,
  },
  {
    image: slide2,
    x: "60%",
    y: "10%",
    w: 500,
    h: 300,
    rotate: 5,
  },
  {
    image: slide3,
    x: "30%",
    y: "40%",
    w: 400,
    h: 600,
    rotate: -10,
  },

  {
    image: slide4,
    x: "70%",
    y: "25%",
    w: 300,
    h: 450,
    rotate: 8,
  },
  {
    image: slide5,
    x: "40%",
    y: "55%",
    w: 450,
    h: 650,
    rotate: -12,
  },
  {
    image: slide6,
    x: "80%",
    y: "30%",
    w: 350,
    h: 550,
    rotate: 10,
  },
  {
    image: slide7,
    x: "50%",
    y: "60%",
    w: 400,
    h: 600,
    rotate: -15,
  },
  {
    image: slide8,
    x: "90%",
    y: "40%",
    w: 300,
    h: 450,
    rotate: 12,
  },
  {
    image: slide9,
    x: "20%",
    y: "70%",
    w: 450,
    h: 650,
    rotate: -18,
  },
  {
    image: slide10,
    x: "50%",
    y: "80%",
    w: 350,
    h: 550,
    rotate: 15,
  },
  {
    image: slide11,
    x: "80%",
    y: "60%",
    w: 400,
    h: 600,
    rotate: -20,
  },
];

// const colors = [
//   {
//     color: "#fff",
//     lineColor: "#000",
//   },
//   {
//     color: "#fff",
//     lineColor: "#000",
//   },
//   {
//     color: "#ffffff",
//     lineColor: "#000",
//   },
// ];
type FilmsProps = {
  bgRef: React.MutableRefObject<{
    color: string;
    lineColor: string;
  }>;
};

const FilmsDesktop = ({ bgRef }: FilmsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  // const filmsRef = useRef({
  //   color: "#000",
  //   lineColor: "rgb(216, 216, 216)",
  // });
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current!;
      // entrance
      gsap.fromTo(
        contentRef.current,
        {
          x: 300,
          y: 300,
          scale: 0.65,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "top top",
            scrub: 5,
          },
        }
      );

      // horizontal
      const horizontalTween = gsap.to(containerRef.current, {
        x: () => -(container.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + (container.scrollWidth - window.innerWidth),
          pin: true,
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>(".scene").forEach((scene, i) => {
        ScrollTrigger.create({
          trigger: scene,
          containerAnimation: horizontalTween,
          start: "left center",
          end: "right center",

          // onEnter: () => {
          //   gsap.to(filmsRef.current, {
          //     ...colors[i],
          //     ease: "power2.inOut",
          //     overwrite: "auto",
          //   });
          // },

          // onEnterBack: () => {
          //   gsap.to(filmsRef.current, {
          //     ...colors[i],
          //     ease: "power2.inOut",
          //     overwrite: "auto",
          //   });
          // },
        });
      });

      gsap.to(bgRef.current, {
        color: "#FFF2B2",
        lineColor: "#8A6F00",
        duration: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden ">
      <div className="" ref={contentRef}>
        <div
          ref={containerRef}
          className="relative h-full w-[300vw] flex z-10 "
        >
          <div className="scene  relative w-screen h-screen">
            {/* slide1 */}
            <div className=" absolute left-[20%] translate-x-[-50%] top-1/2 translate-y-[-50%] flex flex-col gap-2">
              <div className="flex justify-between items-center text-[12px] ">
                <span className="mix-blend-difference white">
                  Jaane Tu... Ya Jaane Na, 2008
                </span>
                <span className="mix-blend-difference white uppercase">
                  jai, aditi and meghna
                </span>
              </div>
              <img
                src={frames[0].image}
                alt={frames[0].image}
                className="w-full h-full object-cover"
              />
            </div>
            <TextReveal className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-[16px] max-w-[250px] flex flex-col gap-4">
              <p className="mix-blend-difference white">"You know..."</p>

              <p className="mix-blend-difference white">
                Sometimes I think love isn't supposed to be complicated.
              </p>
            </TextReveal>
            {/* <div className="text-frame absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-[16px] max-w-[250px] flex flex-col gap-4">
              <p className="relative inline-block overflow-hidden">
                <span className="text-reveal absolute inset-0 bg-yellow-300 z-10"></span>
                <span className="relative z-20 mix-blend-difference white">
                  "You know..."
                </span>
              </p>

              <p className="relative inline-block overflow-hidden">
                <span className="text-reveal absolute inset-0 bg-yellow-300 z-10"></span>
                <span className="relative z-20 mix-blend-difference white">
                  Sometimes I think love isn't supposed to be complicated.
                </span>
              </p>
            </div> */}

            <div className="scene1-quote mix-blend-difference white absolute left-[20%] translate-x-[-50%] top-[90%] translate-y-[-50%] text-[16px] flex flex-col gap-4">
              <p>
                its all about
                <br />
                loving the process
              </p>
            </div>

            {/* slide 2 */}
            <div className="scene1-photo3 absolute left-[50%] translate-x-[-50%] top-[80%] translate-y-[-50%] flex flex-col gap-2">
              <img
                src={frames[1].image}
                alt={frames[1].image}
                className="w-full h-full object-cover"
              />
              <span className="text-[12px] mix-blend-difference white uppercase">
                pappu cant Dance saLA**
              </span>
            </div>
            {/* slide 3 */}
            <div className="scene1-photo4 absolute left-[72%] translate-x-[-50%] top-[30%] translate-y-[-50%] flex flex-col gap-2">
              <span className="text-[12px] uppercase mix-blend-difference white">
                Bollywoord{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-blue-500 blur-sm rounded"></span>
                  <span className="relative line-through">sucks</span>
                </span>
              </span>
              <img
                src={frames[2].image}
                alt={frames[2].image}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="scene scene2 relative w-screen h-screen ">
            {/* slide 4 */}
            <div className="scene2-photo1 absolute -left-[10%]  top-1/2 -translate-y-1/2 flex flex-col gap-2">
              <span className="text-[12px] uppercase mix-blend-difference white">
                hojata hai yaar voh kya train ka ticket
                <br />
                hai jisko paheli book karlo nhi ho jatta hai
              </span>
              <img
                src={frames[3].image}
                alt={frames[3].image}
                className="w-full h-full object-cover"
              />
              <div className="flex  justify-between items-center mix-blend-difference white">
                <p className="text-[12px] uppercase">i hate luv storys, 2010</p>
                <p className="text-[12px] uppercase">jay, simran and raj</p>
              </div>
            </div>
            {/* slide 5 */}
            <div className="scene2-photo2 absolute left-[45%] top-1/2  -translate-x-1/2  -translate-y-1/2 flex flex-col gap-2">
              <img
                src={whiteTape}
                alt="tape"
                className=" absolute -top-7 -left-8 z-10 object-cover -rotate-4"
              />
              <img
                src={frames[4].image}
                alt={frames[4].image}
                className="w-full h-full object-cover"
              />
              <div className="flex  justify-between items-center">
                <p className="text-[12px] uppercase mix-blend-difference white">
                  break ke baad
                  <br />
                  2010
                </p>
                <p className="text-[12px] uppercase mix-blend-difference white">
                  abhay, aaliya
                  <br />
                  nats, cyrus
                </p>
              </div>
            </div>
            {/* slide 6 */}
            <div className="scene2-photo3 absolute left-[75%] top-[20%]  -translate-x-1/2  -translate-y-1/2 flex flex-col gap-2">
              <img
                src={frames[5].image}
                alt={frames[5].image}
                className="w-full h-full object-cover"
              />
            </div>

            <TextReveal className="absolute left-[75%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col">
              <p className="mix-blend-difference white">
                main apne life ke har
              </p>

              <p className="mix-blend-difference white">scene</p>

              <p className="mix-blend-difference white">mein na star hoon...</p>
            </TextReveal>

            {/* <div className="scene2-quote absolute left-[75%] top-[50%]  -translate-x-1/2  -translate-y-1/2  flex flex-col gap-0">
              <p className="text-[18px]">main apne life ke har</p>
              <p className="text-[18px]"> scene</p>
              <p className="text-[18px]"> mein na star hoon...</p>
            </div> */}
            {/* slide 7 */}
            <div className="scene2-photo4 absolute left-[85%] top-[80%]  -translate-x-1/2  -translate-y-1/2 flex flex-col gap-2">
              <img
                src={frames[6].image}
                alt={frames[6].image}
                className="w-full h-full object-cover"
              />
              <div className="text-[12px] uppercase flex  justify-between items-center mix-blend-difference white">
                <p>ek main aur ekk tu, 2012</p>
                <p className="text-end">rahul & riana</p>
              </div>
            </div>
          </div>
          <div className="scene scene3 relative w-screen h-screen ">
            {/* slide 8 */}
            <div className="scene3-photo1 absolute left-0  top-[30%] -translate-y-1/2 flex flex-col gap-2 bg-white px-3 pt-3 pb-6 bg-[#ececec] shadow-xl">
              <img
                src={whiteTape}
                alt="tape"
                className=" absolute -top-5  left-1/2 -translate-x-1/2 rotate-20  z-10 object-cover -rotate-4"
              />
              <img
                src={frames[10].image}
                alt={frames[10].image}
                className="w-full h-full object-cover"
              />
              <div className="flex  justify-between items-center">
                <p className="text-[12px] uppercase">
                  Mere Brother Ki Dulhan
                  <br />
                  2011
                </p>
                <p className="text-[12px] uppercase">
                  kush & dimple
                  <br />
                  luv & piali
                </p>
              </div>
            </div>
            {/* slide 9 */}
            <div className="scene3-photo2  absolute left-80  top-[80%] -translate-y-1/2 flex flex-col gap-2 ">
              <img
                src={star}
                alt="tape"
                className=" absolute -top-5  left-full -translate-x-1/2  z-10 object-cover "
              />
              <img
                src={frames[7].image}
                alt={frames[7].image}
                className="w-full h-full object-cover"
              />
              <p className="text-[12px] uppercase mix-blend-difference white">
                magent of opp attract each other
              </p>
            </div>

            <div className="scene3-photo3  absolute left-[45%] top-1/2 -translate-y-1/2 -translate-x-1/2 mix-blend-difference white">
              <p className="">
                Lorem ipsum dolor sit amet consectetur,
                <br />
                adipisicing elit. Dignissimos, magni.
              </p>
            </div>

            {/* slide 10 */}
            <div className="scene3-photo4  absolute left-[60%] top-[20%] -translate-y-1/2 flex flex-col gap-2 bg-white px-3 pt-3 pb-6 bg-[#ececec] shadow-xl">
              <img
                src={frames[8].image}
                alt={frames[8].image}
                className="w-full h-full object-cover"
              />
              <p className="text-[12px] uppercase">
                magent of opp attract each other
              </p>
            </div>
            {/* slide 11 */}
            <div className="scene3-photo5  absolute left-[60%] top-[70%] -translate-y-1/2 flex flex-col gap-2 ">
              <img
                src={tape}
                alt="tape"
                className=" absolute -top-15  left-5 -translate-x-1/2  z-10 object-cover "
              />
              <img
                src={frames[9].image}
                alt={frames[7].image}
                className="w-full h-full object-cover"
              />
              <div className="flex  justify-between items-center mix-blend-difference white">
                <p className="text-[12px] uppercase">
                  Mere Brother Ki Dulhan
                  <br />
                  2011
                </p>
                <p className="text-[12px] uppercase text-end">
                  kush & dimple
                  <br />
                  luv & piali
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmsDesktop;
