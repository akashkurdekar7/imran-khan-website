import { useState } from "react";
import Hero from "./components/Hero";
import Loader from "./helpers/Loader";
import Background from "./helpers/Background";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen overflow-hidden ">
      <Background />

      {/* {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )} */}
    </div>
  );
};

export default App;