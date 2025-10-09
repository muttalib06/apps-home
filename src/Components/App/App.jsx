import React from "react";
import { Download } from "lucide";
import { FaDownload } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import { NavLink } from "react-router";

const App = ({ app,}) => {
  const { id, image, title, ratingAvg, downloads } = app;
  const toMillion = (number) => {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    }
    return number.toString();
  };
  return (
    <NavLink onClick={() => window.scrollTo(0,0)} to={`/appDetail/${id}`}>
      <div className="text-left shadow-md rounded-lg p-3 border border-gray-300 space-y-3 self-stretch h-full flex flex-col justify-between">
        <img className="rounded-md w-full" src={image} alt="" />
        <p>{title}</p>
        <div className="flex  items-center justify-between">
          <button className="flex gap-2 items-center bg-[#F1F5E8] text-[#00D390] py-1 px-2 rounded-lg">
            <FaDownload />
            {toMillion(downloads)}
          </button>
          <button className="flex gap-2 items-center bg-[#F1F5E8] text-[#FF8811] py-1 px-2 rounded-lg">
            <FcRating />
            {ratingAvg}
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default App;
