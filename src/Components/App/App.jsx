import React from "react";
import { Download } from "lucide";
import { FaDownload } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";


const App = ({app}) => {
        const {image,title,ratings,downloads} = app
  return (
    <div className="text-left shadow-md rounded-lg p-3 border border-gray-300 space-y-3 self-stretch">
      <img className="rounded-md w-full" src={image} alt="" />
      <p>{title}</p>
      <div className="flex  items-center justify-between">
        <button className="flex gap-2 items-center bg-[#F1F5E8] text-[#00D390] py-1 px-2 rounded-lg"><FaDownload/> 8M</button>
        <button className="flex gap-2 items-center bg-[#F1F5E8] text-[#FF8811] py-1 px-2 rounded-lg"><FcRating/> 5</button>
      </div>

    </div>
  );
};

export default App;
