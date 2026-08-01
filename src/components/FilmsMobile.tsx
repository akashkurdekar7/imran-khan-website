import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import star from "/stickers/star.png";
import tape from "/stickers/tape.png";
import whiteTape from "/stickers/white-tape.png";
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
    w: 350,
    h: 500,
  },
  {
    image: slide2,
    w: 500,
    h: 300,
  },
  {
    image: slide3,
    w: 400,
    h: 600,
  },

  {
    image: slide4,
    w: 300,
    h: 450,
  },
  {
    image: slide5,
    w: 450,
    h: 650,
  },
  {
    image: slide6,
    w: 350,
    h: 550,
  },
  {
    image: slide7,
    w: 400,
    h: 600,
  },
  {
    image: slide8,
    w: 300,
    h: 450,
  },
  {
    image: slide9,
    w: 450,
    h: 650,
  },
  {
    image: slide10,
    w: 350,
    h: 550,
  },
  {
    image: slide11,
    w: 400,
    h: 600,
  },
];
type FilmsProps = {
  bgRef: React.MutableRefObject<{
    color: string;
    lineColor: string;
  }>;
};
const FilmsMobile = ({ bgRef }: FilmsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current!;
      // entrance
      gsap.fromTo(
        contentRef.current,
        {
          y: 180,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );

      // horizontal

      gsap.utils.toArray<HTMLElement>(".scene").forEach((scene, i) => {
        ScrollTrigger.create({
          trigger: scene,
          start: "top center",
          end: "bottom center",
        });
      });
      gsap.utils.toArray<HTMLElement>(".film-slide").forEach((slide) => {
        gsap.fromTo(
          slide,
          {
            opacity: 0,
            y: 120,
            skewY: 8,
            rotateX: 15,
            transformOrigin: "bottom center",
          },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            rotateX: 0,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
              trigger: slide,
              start: "top 80%",
              end: "top 45%",
              scrub: 1,
            },
          }
        );
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
    <section ref={sectionRef} className="relative  overflow-hidden pb-10">
      <div className="" ref={contentRef}>
        <div
          ref={containerRef}
          className="relative  w-full flex flex-col gap-24 z-10  "
        >
          {/* scene1 */}
          <div className="scene  relative w-screen px-4 ">
            {/* slide1 */}
            <div className=" w-full flex flex-col items-center justify-center gap-2">
              <div className="flex flex-col justify-between items-center text-[12px] ">
                <span className="text-detai white">
                  Jaane Tu... Ya Jaane Na, 2008
                </span>
                <span className="text-lux tracking-widest white uppercase">
                  jai, aditi and meghna
                </span>
              </div>
              <img
                src={frames[0].image}
                alt={frames[0].image}
                className="w-[50%] xl:w-full h-full object-cover"
              />
            </div>
            <div className="text-frame  py-20 text-[16px] max-w-[250px] flex flex-col mx-auto gap-4">
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
            </div>
            <div className=" text-lux tracking-widest white text-[16px] flex flex-col gap-4">
              <p>
                its all about
                <br />
                loving the process
              </p>
            </div>
            {/* slide 2 */}
            <div className=" flex flex-col gap-2 items-end justify-cneter">
              <img
                src={frames[1].image}
                alt={frames[1].image}
                className="w-[70%] xl:w-full h-full object-cover"
              />
              <span className="text-[12px] text-start text-lux tracking-widest white uppercase">
                pappu cant Dance saLA**
              </span>
            </div>
            {/* slide 3 */}
            <div className="flex flex-col gap-2 items-center py-20 justify-center">
              <span className="text-[12px] text-detai uppercase mix-blend-difference white">
                Bollywoord{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-blue-500 blur-sm rounded"></span>
                  <span className="relative line-through text-lux tracking-widest text-[14px]">
                    sucks
                  </span>
                </span>
              </span>
              <img
                src={frames[2].image}
                alt={frames[2].image}
                className="w-[80%] xl:w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="scene scene2 relative w-screen px-4 ">
            {/* slide 4 */}
            <div className=" flex flex-col gap-2 items-center justify-center">
              <span className="text-[8px] text-center text-detai uppercase tracking-widest white">
                hojata hai yaar voh kya train ka ticket
                <br />
                hai jisko paheli book karlo nhi ho jatta hai
              </span>
              <img
                src={frames[3].image}
                alt={frames[3].image}
                className="w-full h-full object-cover"
              />
              <div className="flex flex-col justify-between items-center text-lux tracking-widest white">
                <p className="text-[12px] uppercase">i hate luv storys, 2010</p>
                <p className="text-[12px] uppercase">jay, simran and raj</p>
              </div>
            </div>
            {/* slide 5 */}
            <div className="relative mt-20 flex flex-col gap-2">
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
                <p className="text-[12px] text-detai uppercase  white">
                  break ke baad
                  <br />
                  2010
                </p>
                <p className="text-[12px] text-lux uppercase tracking-widest white">
                  abhay, aaliya
                  <br />
                  nats, cyrus
                </p>
              </div>
            </div>
            {/* slide 6 */}
            <div className=" flex flex-col gap-2 items-end justify-center py-10">
              <img
                src={frames[5].image}
                alt={frames[5].image}
                className="w-[80vw] h-full object-cover"
              />
            </div>
            <div className="text-frame2 flex flex-col gap-0 ">
              <p className="relative overflow-hidden w-fit">
                <span className="text-reveal2 absolute inset-0 bg-[#F26B4F] z-10"></span>
                <span className="relative text-lux tracking-widest white">
                  main apne life ke har
                </span>
              </p>

              <p className="relative overflow-hidden w-fit">
                <span className="text-reveal2 absolute inset-0 bg-[#F26B4F] z-10"></span>
                <span className="relative mix-blend-difference white">
                  scene
                </span>
              </p>

              <p className="relative overflow-hidden w-fit mix-blend-difference white">
                <span className="text-reveal2 absolute inset-0 bg-[#F26B4F] z-10"></span>
                <span className="relative">mein na star hoon...</span>
              </p>
            </div>
            <div className=" flex flex-col gap-2 items-start justify-center pt-10">
              <img
                src={frames[6].image}
                alt={frames[6].image}
                className="w-full h-full object-cover"
              />
              <div className="text-[12px] uppercase flex flex-col  text-lux tracking-widest white">
                <p>ek main aur ekk tu, 2012</p>
                <p>rahul & riana</p>
              </div>
            </div>
          </div>
          <div className="scene scene3 relative w-screen px-4">
            {/* slide 8 */}
            <div className="w-[80vw] mx-auto flex flex-col gap-2  px-3 pt-3 pb-5 bg-[#ececec] shadow-xl">
              <img
                src={whiteTape}
                alt="tape"
                className=" absolute -top-8  left-1/2 -translate-x-1/2 rotate-20  z-10 object-cover -rotate-4"
              />
              <img
                src={frames[10].image}
                alt={frames[10].image}
                className="w-full h-full object-cover"
              />
              <div className="flex flex-col justify-between items-start">
                <span className="text-[12px] text-detai uppercase text-start">
                  Mere Brother Ki Dulhan
                </span>
                <span className="text-[10px] text-detai uppercase ">
                  kush & dimple
                </span>
                <span className="text-[10px] text-detai uppercase ">
                  luv & piali
                </span>
                <span className="text-[8px] text-lux uppercase ">2011</span>
              </div>
            </div>
            {/* slide 9 */}
            <div className=" flex flex-col gap-2 py-10 items-center justify-center w-[50vw] ml-auto">
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
              <p className="text-[8px] text-detai text-end uppercase  white">
                magent of opp attract each other
              </p>
            </div>
            <div className="text-lux tracking-widest white pb-10">
              <p className="">
                Lorem ipsum dolor sit amet consectetur,
                <br />
                adipisicing elit. Dignissimos, magni.
              </p>
            </div>
            {/* slide 10 */}
            <div className="flex flex-col gap-2 mb-20 px-3 pt-3 pb-6 bg-[#ececec] shadow-xl">
              <img
                src={frames[8].image}
                alt={frames[8].image}
                className="w-full h-full object-cover"
              />
              <p className="text-[12px] uppercase text-detai text-center tracking-widest">
                magent of opp attract each other
              </p>
            </div>
            {/* slide 11 */}
            <div className=" flex flex-col gap-2 relative w-[80vw] mx-auto ">
              <img
                src={tape}
                alt="tape"
                className="w-[30%] h-auto absolute -top-10  left-5 -translate-x-1/2  z-10 object-contain "
              />
              <img
                src={frames[9].image}
                alt={frames[7].image}
                className="w-full h-full object-cover"
              />
              <div className="flex flex-col justify-between items-end white">
                <span className="text-[12px] text-detai uppercase text-start">
                  Mere Brother Ki Dulhan
                </span>
                <span className="text-[10px] text-detai uppercase ">
                  kush & dimple
                </span>
                <span className="text-[10px] text-detai uppercase ">
                  luv & piali
                </span>
                <span className="text-[8px] text-lux uppercase ">2011</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmsMobile;
