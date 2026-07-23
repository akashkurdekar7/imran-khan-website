import { createContext, useContext, useState } from "react";

const BackgroundContext = createContext<any>(null);

export const BackgroundProvider = ({ children }: any) => {
  const [bg, setBg] = useState({
    color: "#ffffff",
    lineColor: "rgba(0,0,0,.1)",
  });

  return (
    <BackgroundContext.Provider value={{ bg, setBg }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => useContext(BackgroundContext);
