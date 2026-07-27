import { useState } from "react";
import Loader from "./helpers/Loader";
import Header from "./helpers/Header";
import Hero from "./components/Hero";
import Cursor from "./helpers/Cursor";
import Article from "./components/Article";
import Poster from "./components/Poster";
import Films from "./components/Films";
import SmoothScroll from "./helpers/SmoothScroll";
import Demo from "./components/Demo";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative min-h-screen overflow-hidden ">
      <SmoothScroll />
      <Cursor />
      <Header />
      <Hero />
      <Article />
      <Films />
      <Poster />
      <Demo />
      {loading && <Loader onComplete={() => setLoading(false)} />}
    </div>
  );
};

export default App;
