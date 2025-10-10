import React from "react";
import { BiDownload } from "react-icons/bi";
import { FcRating } from "react-icons/fc";

const InstalledApp = ({ app,handleRemove }) => {
  const {id,image, title, ratingAvg, downloads } = app;
  const toMillion = (number) => {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    }
    return number.toString();
  };
  return (
    <div className="flex flex-col md:flex-row justify-between items-center shadow border border-gray-300 p-4 rounded-md">
      <div className="flex justify-center items-center gap-4 flex-col md:flex-row">
        <img className="w-20 h-20 rounded-md" src={image} alt="" />
        <div className="space-y-5 text-center md:text-left">
          <h4 className="text-[#001931] font-medium">{title}</h4>
          <div className="flex gap-5 items-center">
            <p className="flex gap-2 items-center text-[#00D390]">
              <BiDownload /> {toMillion(downloads)}
            </p>
            <p className="flex gap-2 items-center text-[#FF8811]">
              <FcRating /> {toMillion(ratingAvg)}
            </p>
            <p className="flex gap-2 items-center text-[#627382]">255MB</p>
          </div>
        </div>
      </div>
      <button onClick={() => handleRemove(id)} className="btn bg-[#00D390] text-white my-3 md:my-0">Uninstall</button>
    </div>
  );
};

export default InstalledApp;
