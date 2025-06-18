import { UnitContext } from "@/utils/unitContext";
import { useContext } from "react";
import { IoSearch } from "react-icons/io5";

export const Nav = ({ searchQuery, setSearchQuery, handleSearch }) => {
  const { unit, toggleUnit } = useContext(UnitContext);
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-2 bg-slate-700 rounded-full py-1 pl-2 text-white ">
        <IoSearch />
        <input
          type="text"
          className="text-white focus:outline-none  "
          placeholder="Search city..."
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
      <div className="bg-slate-700 text-white font-semibold py-1 px-2 rounded-full">
        <button className="flex gap-4 " onClick={toggleUnit}>
          <div
            className={` transition-transform duration-500 ${
              unit == "C" && "bg-white text-black rounded-full px-2"
            }`}
          >
            °C
          </div>
          <div
            className={`transition-transform  duration-500 ${
              unit == "F" && "bg-white text-black rounded-full px-2"
            }`}
          >
            °F
          </div>
        </button>
      </div>
    </div>
  );
};
