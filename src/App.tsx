import { useRef, useState } from "react";
import Loader from "./helpers/Loader";
import Header from "./helpers/Header";
import Hero from "./components/Hero";
import Cursor from "./helpers/Cursor";
import Article from "./components/Article";
import Poster from "./components/Poster";
import SmoothScroll from "./helpers/SmoothScroll";
import Footer from "./components/Footer";
import Background from "./helpers/Background";
import Practise from "./components/Practise";
import Author from "./components/Author";
import FilmsDesktop from "./components/FilmsDesktop";
import FilmsMobile from "./components/FilmsMobile";
// import Practise from "./components/Practise";
// import Demo from "./components/Demo";

const App = () => {
  const [loading, setLoading] = useState(true);
  const bgRef = useRef({
    color: "#000",
    lineColor: "rgb(216,216,216)",
  });
  return (
    <div className="relative min-h-screen overflow-hidden ">
      <SmoothScroll />
      <Background bgRef={bgRef} />
      <Cursor />
      <Header />
      <Hero bgRef={bgRef} />
      <Article />
      <div className="hidden xl:block">
        <FilmsDesktop bgRef={bgRef} />
      </div>

      <div className="xl:hidden">
        <FilmsMobile bgRef={bgRef} />
      </div>
      <Poster />
      <Author />
      {/* <Demo /> */}
      <Footer />
      {/* {loading && <Loader onComplete={() => setLoading(false)} />} */}
    </div>
  );
};

export default App;
