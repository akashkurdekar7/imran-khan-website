import { useState } from "react";
import Loader from "./helpers/Loader";
import Background from "./helpers/Background";
import Header from "./helpers/Header";
import Hero from "./components/Hero";
import Cursor from "./helpers/Cursor";
import Article from "./components/Article";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen overflow-hidden ">
      <Background />
      <Cursor />
      <Header/>
      <Hero />
      <Article/>

      {/* {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )} */}
    </div>
  );
};

export default App;