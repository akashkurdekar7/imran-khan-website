import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

const values = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

interface LoaderProps {
  onComplete: () => void;
}
const Loader = ({ onComplete }: LoaderProps) => {
  const stackRef = useRef(null);
  const loaderRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stackRef.current, {
      y: -(values.length - 1) * 100,
      duration: 3,
      ease: "power4.inOut",
    });

    tl.to(loaderRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut",
      onComplete,
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <section
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#F26B4F]"
    >
      <div className="h-25 overflow-hidden">
        <div ref={stackRef} className="flex flex-col">
          {values.map((value) => (
            <div
              key={value}
              className="h-25 flex items-center justify-center text-8xl text-lux"
            >
              {value}%
            </div>
          ))}
        </div>
      </div>

      <h1 className=" black absolute bottom-10 uppercase text-[12px] tracking-[0.2em] text-detai">
        Lost Khan
      </h1>
    </section>
  );
};

export default Loader;
