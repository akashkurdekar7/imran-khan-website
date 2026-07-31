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
  return (
    <section ref={sectionRef} className="relative  overflow-hidden ">
      <div className="" ref={contentRef}>
        <div
          ref={containerRef}
          className="relative  flex flex-col gap-24 z-10 "
        >
          {/* scene1 */}
          <div className="scene  relative w-screen ">
            {/* slide1 */}
            <div className="  flex flex-col gap-2">
              <div className="flex justify-between items-center text-[12px] ">
                <span className="mix-blend-difference text-white">
                  Jaane Tu... Ya Jaane Na, 2008
                </span>
                <span className="mix-blend-difference text-white uppercase">
                  jai, aditi and meghna
                </span>
              </div>
              <img
                src={frames[0].image}
                alt={frames[0].image}
                className="w-[50%] xl:w-full h-full object-cover"
              />
            </div>
            <div className="text-frame  text-[16px] max-w-[250px] flex flex-col gap-4">
              <p className="relative inline-block overflow-hidden">
                <span className="text-reveal absolute inset-0 bg-yellow-300 z-10"></span>
                <span className="relative z-20 mix-blend-difference text-white">
                  "You know..."
                </span>
              </p>

              <p className="relative inline-block overflow-hidden">
                <span className="text-reveal absolute inset-0 bg-yellow-300 z-10"></span>
                <span className="relative z-20 mix-blend-difference text-white">
                  Sometimes I think love isn't supposed to be complicated.
                </span>
              </p>
            </div>
            <div className=" mix-blend-difference text-white text-[16px] flex flex-col gap-4">
              <p>
                its all about
                <br />
                loving the process
              </p>
            </div>
            {/* slide 2 */}
            <div className=" flex flex-col gap-2">
              <img
                src={frames[1].image}
                alt={frames[1].image}
                className="w-[70%] xl:w-full h-full object-cover"
              />
              <span className="text-[12px] mix-blend-difference text-white uppercase">
                pappu cant Dance saLA**
              </span>
            </div>
            {/* slide 3 */}
            <div className="flex flex-col gap-2">
              <span className="text-[12px] uppercase mix-blend-difference text-white">
                Bollywoord{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-blue-500 blur-sm rounded"></span>
                  <span className="relative line-through">sucks</span>
                </span>
              </span>
              <img
                src={frames[2].image}
                alt={frames[2].image}
                className="w-[80%] xl:w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="scene scene2 relative w-screen ">
            {/* slide 4 */}
            <div className=" flex flex-col gap-2">
              <span className="text-[12px] uppercase mix-blend-difference text-white">
                hojata hai yaar voh kya train ka ticket
                <br />
                hai jisko paheli book karlo nhi ho jatta hai
              </span>
              <img
                src={frames[3].image}
                alt={frames[3].image}
                className="w-full h-full object-cover"
              />
              <div className="flex justify-between items-center mix-blend-difference text-white">
                <p className="text-[12px] uppercase">i hate luv storys, 2010</p>
                <p className="text-[12px] uppercase">jay, simran and raj</p>
              </div>
            </div>
            {/* slide 5 */}
            <div className=" flex flex-col gap-2">
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
                <p className="text-[12px] uppercase mix-blend-difference text-white">
                  break ke baad
                  <br />
                  2010
                </p>
                <p className="text-[12px] uppercase mix-blend-difference text-white">
                  abhay, aaliya
                  <br />
                  nats, cyrus
                </p>
              </div>
            </div>
            {/* slide 6 */}
            <div className=" flex flex-col gap-2">
              <img
                src={frames[5].image}
                alt={frames[5].image}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-frame2 flex flex-col gap-0 ">
              <p className="relative overflow-hidden w-fit">
                <span className="text-reveal2 absolute inset-0 bg-[#fff403] z-10"></span>
                <span className="relative mix-blend-difference text-white">
                  main apne life ke har
                </span>
              </p>

              <p className="relative overflow-hidden w-fit">
                <span className="text-reveal2 absolute inset-0 bg-[#fff403] z-10"></span>
                <span className="relative mix-blend-difference text-white">
                  scene
                </span>
              </p>

              <p className="relative overflow-hidden w-fit mix-blend-difference text-white">
                <span className="text-reveal2 absolute inset-0 bg-[#fff403] z-10"></span>
                <span className="relative">mein na star hoon...</span>
              </p>
            </div>
            <div className=" flex flex-col gap-2">
              <img
                src={frames[6].image}
                alt={frames[6].image}
                className="w-full h-full object-cover"
              />
              <div className="text-[12px] uppercase flex  justify-between items-center mix-blend-difference text-white">
                <p>ek main aur ekk tu, 2012</p>
                <p className="text-end">rahul & riana</p>
              </div>
            </div>
          </div>
          <div className="scene scene3 relative w-screen h-screen ">
            {/* slide 8 */}
            <div className="flex flex-col gap-2 bg-white px-3 pt-3 pb-6 bg-[#ececec] shadow-xl">
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
            <div className=" flex flex-col gap-2 ">
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
              <p className="text-[12px] uppercase mix-blend-difference text-white">
                magent of opp attract each other
              </p>
            </div>
            <div className="mix-blend-difference text-white">
              <p className="">
                Lorem ipsum dolor sit amet consectetur,
                <br />
                adipisicing elit. Dignissimos, magni.
              </p>
            </div>
            {/* slide 10 */}
            <div className="flex flex-col gap-2 bg-white px-3 pt-3 pb-6 bg-[#ececec] shadow-xl">
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
            <div className=" flex flex-col gap-2 ">
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
              <div className="flex  justify-between items-center mix-blend-difference text-white">
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

export default FilmsMobile;
