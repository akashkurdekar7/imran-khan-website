import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const image = "/poster/poster.png";
const Poster = () => {
  return (
    <section className="bg-black poster-section">
      <img src={image} className="w-full h-full object-cover" />
      <div className="grid grid-cols-2 gap-4 px-10 py-10">
        <div className=" text-mina text-[80px] uppercase flex flex-col  items-start justify-start">
          <h2 className="text-[#fff403] leading-none">films</h2>
          <h2 className="text-white leading-none">in the heart</h2>
        </div>
        <div className="max-w-[400px] flex flex-col gap-2 items-start justify-center">
          <p className="text-mest text-[18px] opacity-50 text-white tracking-widest">
            From his iconic blobs to innovative one-off designs, Lando has
            always been passionate about designing innovative and memorable
            helmets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Poster;
