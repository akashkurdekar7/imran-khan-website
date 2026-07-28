const Footer = () => {
  return (
    <footer className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-7xl w-full px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">
          Final Chapter
        </p>

        <h2 className="text-[clamp(60px,10vw,180px)] leading-[0.9] font-medium">
          DESIGNED.
          <br />
          DEVELOPED.
          <br />
          DELIVERED.
        </h2>

        <p className="max-w-xl mt-10 text-white/60 text-xl leading-relaxed">
          Every interaction, animation, and component on this website was
          designed in Figma and developed from scratch using React, GSAP,
          Three.js, and Tailwind CSS.
        </p>

        <div className="mt-24 flex justify-between items-end border-t border-white/10 pt-8">
          <div>
            <h3 className="text-2xl">Akash Kurdekar</h3>
            <p className="text-white/50">Frontend Engineer</p>
          </div>

          <p className="text-white/30">© 2026 — Crafted with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
