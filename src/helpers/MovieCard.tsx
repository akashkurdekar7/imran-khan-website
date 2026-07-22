import { useRef } from "react";
import gsap from "gsap";

type MovieCardProps = {
  image: string;
  title: string;
  year: string;
  runtime: string;
  producer: string;
  director: string;
  starring: string;
};

const MovieCard = ({
  image,
  title,
  year,
  runtime,
  producer,
  director,
  starring,
}: MovieCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const enter = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      y: 0,
      rotation: 0,
      opacity: 1,
      duration: 0.45,
      ease: "power3.out",
      pointerEvents: "auto",
    });
  };

  const leave = () => {
    gsap.to(cardRef.current, {
      scale: 0.7,
      y: 30,
      rotation: -3,
      opacity: 0,
      duration: 0.35,
      ease: "power3.in",
      pointerEvents: "none",
    });
  };

  return (
    <div
      className="group relative overflow-visible inline-block"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      {/* Thumbnail */}
      <img
        src={image}
        alt={title}
        className="block transition-opacity duration-300 "
      />

      {/* Popup Card */}
     {/* <div
        ref={cardRef}
        className="absolute left-1/2 top-1/2 z-50 w-max -translate-x-1/2 -translate-y-1/2 bg-white px-2 pt-2 pb-3 shadow-2xl border-black border-2"
        style={{
          opacity: 0,
          transform: "translate(-50%,-50%) scale(.7)",
          pointerEvents: "none",
        }}
      >
        <img src={image} alt={title} className="w-full h-full object-contain" />

<div className="mt-4 text-black">
          <div className="flex justify-between items-end gap-2">
            <h2 className="text-[18px] text-mina uppercase leading-none">
              {title}
            </h2>

            <span className="text-[8px] text-mina  leading-none">{year}</span>
          </div>

          <div className="mt-5 space-y-2 text-left text-sm">
            <p className="text-[8px] text-mest uppercase leading-none">
              Running time: <strong>{runtime}</strong>
            </p>

            <p className="text-[8px] font-bold uppercase leading-none">
              Produced by: <strong>{producer}</strong>
            </p>

            <p className="text-[8px] font-bold uppercase leading-none">
              Directed by: <strong>{director}</strong>
            </p>

            <p className="text-[8px] font-bold uppercase leading-none">
              Starring: <strong>{starring}</strong>
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MovieCard;