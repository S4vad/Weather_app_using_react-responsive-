import {useState } from "react";
import { UnitContext } from "./unitContext.js";


export const UnitProvider = ({children}) => {
  const [unit, setUnit] = useState("C");

  const toggleUnit = () => {
    setUnit((prev) => (prev === "C" ? "F" : "C"));
  };

  return (
    <UnitContext.Provider value={{ unit,toggleUnit }}>
      {children}
    </UnitContext.Provider>
  );
};
