import { IoSearch } from "react-icons/io5";

export const Nav = ({ searchQuery, setSearchQuery,handleSearch }) => {
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
              handleSearch()
            }
          }}
        />
      </div>
      <div className="bg-slate-700 text-white font-semibold py-1 px-2 rounded-full">
        <button className="flex gap-4 ">
          <div className="bg-white text-black rounded-full px-1.5">C</div>
          <div>F</div>
        </button>
      </div>
    </div>
  );
};
