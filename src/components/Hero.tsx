import { useLayoutEffect, useRef } from "react";
import heroImage from "/hero.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background from "../helpers/Background";
gsap.registerPlugin(ScrollTrigger);
type HeroProps = {
  bgRef: React.MutableRefObject<{
    color: string;
    lineColor: string;
  }>;
};
const Hero = ({ bgRef }: HeroProps) => {
  const pinRef = useRef(null);
  const contentRef = useRef(null);
  const signatureRef = useRef<HTMLDivElement>(null);

  const heroBg = useRef({
    color: "#fff",
    lineColor: "rgba(0,0,0,.1)",
  });

  // const marqueeBg = useRef({
  //   color: "#fff",
  //   lineColor: "#000",
  // });

  const marqueeText1 = "ACTOR • DIRECTOR • WRITER • PRODUCER •";
  const marqueeText2 =
    "JAANE TU... YA JAANE NA • KIDNAP • LUCK • I HATE LUV STORYS • BREAK KE BAAD • DELHI BELLY • MERE BROTHER KI DULHAN • MATRU KI BIJLEE KA MANDOLA •";
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: true,
        },
      });
      gsap.set([".marquee-left", ".marquee-right"], {
        opacity: 0,
      });
      gsap.set(".era-logo", {
        y: 100,
      });
      gsap.set(".signature", {
        autoAlpha: 0,
        scale: 0.9,
      });

      tl.to(
        contentRef.current,
        {
          scale: 0.3,
          borderRadius: 10,
          ease: "none",
        },
        0
      );
      tl.to(
        heroBg.current,
        {
          color: "#A39B00",
          lineColor: "#fff403",
          duration: 0.5,
        },
        0.1 // starts halfway through the timeline
      );
      tl.to(
        bgRef.current,
        {
          color: "#1e1e1e",
          lineColor: "#000",
        },
        0.05
      );

      tl.to(
        ".hero-hide",
        {
          opacity: 0,
          y: -30,
          ease: "power2.out",
          duration: 0.1,
        },
        0.09
      );
      tl.to(
        [".marquee-left", ".marquee-right"],
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        0.12
      );
      tl.to(
        ".era-logo",
        {
          y: 0,
          ease: "none",
        },
        0.09
      );
      const path = document.querySelector(".signature-path") as SVGPathElement;

      const length = path.getTotalLength();

      gsap.set(".signature", {
        autoAlpha: 1,
      });

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        fill: "transparent",
      });

      tl.fromTo(
        ".signature",
        {
          autoAlpha: 0,
          scale: 0.95,
          y: 20,
        },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          ease: "power2.out",
        },
        0.15
      );

      tl.to(
        path,
        {
          strokeDashoffset: 0,
          ease: "none",
        },
        ">"
      );

      tl.to(
        path,
        {
          fill: "#fff",
        },
        ">"
      );
    });

    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const left = document.querySelector(".marquee-left") as HTMLElement;

      gsap.to(left, {
        x: () => -(left.scrollWidth / 2),
        duration: 12,
        repeat: -1,
        ease: "none",
      });
      const right = document.querySelector(".marquee-right") as HTMLElement;

      gsap.fromTo(
        right,
        {
          x: -(right.scrollWidth / 2),
        },
        {
          x: 0,
          duration: 18,
          repeat: -1,
          ease: "sine.inOut",
        }
      );
      gsap.to(".marquee-word", {
        y: 12,
        duration: 1.8,
        ease: "sine.inOut",
        stagger: {
          each: 0.08,
          repeat: -1,
          yoyo: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pinRef} className="hero relative h-screen overflow-hidden ">
      <section className="absolute inset-0 z-20" ref={contentRef}>
        <Background bgRef={heroBg} />
        <div className="h-full relative">
          <div className="hero-hide absolute top-8 right-8 md:top-10 md:right-10">
            <ul className="flex flex-col items-end gap-2 uppercase text-right ">
              <li className="text-[12px]  font-medium tracking-[0.35em] leading-none text-mina">
                Actor
              </li>

              <li className="text-[12px] font-medium tracking-[0.35em] leading-none text-mina">
                Since 2008
              </li>

              <li className="text-[12px] font-medium tracking-[0.35em] leading-none text-mina">
                India
              </li>
            </ul>
          </div>
          <div className="  w-full h-full flex items-end justify-center">
            <div className="relative  overflow-visible ">
              <div className="hero-hide absolute bottom-0 -left-80 flex flex-col text-mina uppercase gap-4">
                <span className="text-[90px] leading-none ">The</span>
                <span className="text-[90px] leading-none">Boy</span>
                <span className="text-[90px]   leading-none">Next</span>
                <span className="text-[90px]  leading-none">Door</span>
              </div>

              <img
                src={heroImage}
                alt="Imran Khan"
                className="w-[90vh] h-auto object-contain"
              />

              <div className=" hero-hide absolute top-1/2 -translate-y-1/2 -right-72 flex flex-col items-start z-20">
                <span className="text-mina text-[90px] leading-[20px]">"</span>
                <p className="text-mest text-[24px] leading-[1.35] ">
                  the boy who
                  <br />
                  made romance
                  <br />
                  feel effortless.
                </p>
                <div className="w-10 h-[2px] bg-black/20 mt-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        ref={signatureRef}
        className="signature absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 "
      >
        <svg
          width="450"
          height="525"
          viewBox="0 0 850 525"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="signature-path"
            d="M267.202 6.79841C294.402 16.3984 314.402 38.3984 321.602 76.3984C330.802 126.398 293.602 218.798 257.602 307.198C220.802 396.798 186.002 482.798 204.402 505.198C208.002 509.998 207.602 516.798 202.802 520.398C198.002 524.398 191.202 523.598 187.202 518.798C160.802 486.398 198.002 394.798 237.202 299.198C272.002 213.198 308.402 123.998 300.002 80.3984C294.402 51.1984 279.602 34.3984 260.002 27.5984C244.802 22.3984 226.002 22.7984 206.002 27.5984C185.202 32.7984 163.202 43.1984 141.602 57.5984C78.4016 100.398 22.0016 177.998 23.2016 264.398C23.2016 270.798 18.4016 275.598 12.4016 275.598C6.40156 275.598 1.60156 270.798 1.20156 264.798C0.00156228 169.998 60.8016 85.5984 129.602 39.5984C152.802 23.5984 177.602 12.3984 200.802 6.3984C224.802 0.398401 247.602 -0.00156975 267.202 6.79841ZM278.964 413.998C272.964 413.198 268.564 407.598 269.364 401.598C271.364 388.398 273.764 376.798 278.164 365.198C282.164 353.598 287.764 342.398 295.764 330.398C298.964 325.198 305.764 323.998 310.964 327.198C315.764 330.398 317.364 337.198 314.164 342.398C312.564 344.798 311.364 346.798 310.164 349.198C320.964 334.798 332.164 320.798 343.364 309.598C348.564 304.398 354.564 298.398 360.564 294.398C368.564 288.798 376.564 285.598 384.164 287.998L384.964 288.398C403.364 294.798 396.964 319.598 390.964 342.398V343.198C396.164 334.398 401.364 326.798 408.964 325.998C420.564 325.198 424.564 336.798 424.964 353.198C425.364 363.198 424.564 375.198 424.164 384.798V385.998L432.964 377.998C442.164 369.998 450.564 359.998 453.764 355.198L454.164 354.398C457.364 349.598 464.164 347.998 469.364 351.198C474.164 354.398 475.764 361.198 472.564 366.398L472.164 367.198C468.164 372.798 458.164 384.798 447.764 394.398L446.964 394.798C434.164 406.798 419.364 415.198 408.964 409.198L407.764 408.798C400.564 403.998 400.964 398.798 401.764 389.998L402.164 383.998C402.564 378.398 402.964 371.598 402.964 365.198C396.164 375.998 387.764 385.598 376.564 382.798C358.964 378.798 364.164 358.398 369.764 336.798C373.364 323.598 377.764 309.598 377.364 309.198C376.964 308.798 375.764 310.398 373.364 312.398C368.564 315.598 363.364 320.398 358.564 325.198C347.364 336.398 334.964 352.398 322.964 367.998C311.364 383.198 299.764 398.398 288.164 410.398C285.764 412.798 282.564 414.398 278.964 413.998ZM565.908 349.598C571.908 350.798 575.908 356.398 574.708 362.398C573.508 368.398 570.308 373.598 565.908 377.198C561.908 380.798 556.308 382.798 550.308 382.798H549.908C532.708 382.798 524.308 365.998 517.908 353.998L516.308 349.998C515.508 348.398 514.308 347.198 513.508 346.398H513.108C512.708 345.998 511.908 345.998 510.708 345.998C509.508 345.998 507.908 346.798 506.308 347.598C501.108 349.998 496.308 355.198 493.508 360.398C490.308 365.998 487.908 371.998 485.108 378.398L484.708 378.798C479.908 389.598 475.108 400.798 468.308 409.198C465.908 412.798 461.908 414.398 457.508 413.598C451.508 412.398 447.508 406.798 448.708 400.798L461.908 334.398C463.108 328.398 468.708 324.398 474.708 325.598C480.308 326.798 484.308 331.998 483.508 337.598C487.508 333.598 491.508 330.398 495.908 327.998C500.308 325.998 504.708 324.398 509.108 323.998C514.308 323.598 519.108 324.798 523.908 327.198L524.308 327.598C528.708 329.998 532.708 333.998 535.908 339.998L537.908 343.998C541.108 351.198 546.308 360.798 549.908 360.798C550.708 360.798 551.508 360.398 552.308 359.998C552.708 359.598 553.108 359.198 553.108 358.398C554.308 352.398 559.908 348.798 565.908 349.598ZM682.727 350.798C687.927 353.998 689.527 360.798 686.727 365.998C681.927 373.598 667.527 392.398 653.127 403.198C641.527 411.598 629.527 416.398 619.127 411.198L617.927 410.798C616.327 409.998 614.727 408.798 613.527 407.598V407.198C609.127 402.798 607.127 396.398 606.727 388.798C602.727 393.598 598.327 397.998 593.927 401.598L593.127 402.398C583.927 409.598 574.327 413.998 566.327 413.998C562.327 413.998 558.727 413.198 555.527 411.198L554.727 410.798C551.527 408.798 549.127 405.998 547.927 402.398C546.327 399.198 545.527 395.598 545.527 391.998C545.527 384.398 548.727 374.398 554.327 364.398C560.327 353.598 568.727 344.398 576.727 337.598L577.527 337.198C586.727 329.998 596.327 325.198 604.727 325.198C608.727 325.198 611.927 326.398 615.127 327.998L615.927 328.398C618.327 329.998 620.327 331.998 621.527 334.398C623.127 331.998 624.727 329.998 626.327 328.398C630.727 324.398 637.927 324.398 641.927 328.798C646.327 333.198 645.927 339.998 641.927 344.398C641.127 344.798 639.927 346.398 638.727 348.798C635.127 355.598 631.127 365.998 629.527 375.998C627.927 383.198 627.527 389.598 628.727 391.598C630.727 391.998 634.727 389.198 639.527 385.598C651.927 376.398 663.927 361.198 667.527 354.798C670.727 349.598 677.527 347.998 682.727 350.798ZM597.127 363.998C601.127 357.598 603.127 351.598 603.127 347.598C599.927 348.398 595.927 350.398 591.527 353.998L590.727 354.798C584.327 359.998 577.927 367.198 573.527 375.198C569.527 381.998 567.527 387.598 567.527 391.598C570.727 391.198 574.727 388.798 579.527 385.198L579.927 384.798C586.327 379.598 592.727 371.998 597.127 363.998ZM774.417 394.398C770.417 406.398 770.817 405.598 787.617 394.798C795.217 389.998 802.017 384.398 808.817 377.598C815.217 370.798 821.617 363.198 827.617 354.398C830.817 349.198 837.617 347.998 842.817 351.198C848.017 354.798 849.217 361.598 845.617 366.798C839.217 376.398 832.017 385.198 824.417 393.198C816.417 400.798 808.417 407.598 799.617 413.198C785.217 422.798 773.217 429.598 764.017 428.798C749.617 427.198 744.417 415.998 753.217 387.598C756.017 378.398 760.017 368.398 764.017 357.998C769.217 345.198 774.417 331.598 777.217 319.998C778.417 315.998 778.817 312.398 779.217 309.998C776.417 310.398 773.217 311.998 769.617 313.598C744.017 325.998 711.617 365.998 690.417 391.198C683.617 399.998 677.617 406.798 673.617 411.198C671.217 413.598 668.017 415.198 664.417 414.398C658.417 413.598 654.017 407.998 654.817 401.998C658.417 374.798 674.017 351.198 689.617 327.598L696.017 317.598C699.217 312.398 706.017 311.198 711.217 314.398C716.417 317.598 718.017 324.398 714.417 329.598L713.217 331.598C728.417 315.598 744.817 301.198 760.017 293.998C766.017 290.798 771.617 288.798 776.017 287.998C782.417 286.798 788.017 287.598 792.417 290.398C797.617 293.998 800.417 299.198 800.817 306.798C801.217 311.998 800.417 317.998 798.417 325.198C795.617 337.998 790.017 351.998 784.417 365.998C780.817 375.998 776.817 385.598 774.417 394.398ZM780.417 309.198V308.798C780.817 309.198 780.817 309.198 780.417 309.198Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
      <section className="absolute h-screen top-0 left-0 right-0 z-6 flex flex-col justify-center">
        <div className=" absolute left-1/2 top-40 -translate-x-1/2 z-20  overflow-hidden">
          <div className="era-logo flex items-center gap-5">
            <span className="h-px w-14 bg-white/40" />

            <div className="flex flex-col items-center">
              <svg
                className="mb-2 h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
              >
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
              </svg>

              <span className="text-mina text-[18px] tracking-[0.35em] uppercase text-white mix-blend-difference">
                THE ROMANCE ARCHIVE
              </span>

              <span className="mt-2 text-xs tracking-[0.6em] text-white/60 uppercase">
                EST. 2008
              </span>
            </div>

            <span className="h-px w-14 bg-white/40" />
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="marquee-left whitespace-nowrap flex">
            {[1, 2, 3].map((_, i) => (
              <p
                key={i}
                className="text-[90px] uppercase text-white  text-mina px-10 shrink-0"
              >
                {marqueeText1}
              </p>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="marquee-right whitespace-nowrap flex">
            {marqueeText2.split(" ").map((word, i) => (
              <span
                key={i}
                className="marquee-word text-[90px]  text-transparent uppercase text-mina px-10 shrink-0"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px white",
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
        {/* <div className="absolute bottom-5 right-5 rounded-lg bg-black/5 backdrop-blur-[2px] p-4">
          <p className="text-[16px] text-mest ">
            An editorial tribute to Imran Khan's
            <br />
            unforgettable coming-of-age era.
          </p>
        </div> */}
      </section>
    </div>
  );
};

export default Hero;
