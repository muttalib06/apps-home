import React, { useState } from "react";
import { FaDove, FaDownload } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import likeImg from "../../assets/Vector (1).png";
import { ToastContainer, toast } from "react-toastify";
import Chart from "react-apexcharts";
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from "../../Utility/localstorage";
import { SiAlwaysdata } from "react-icons/si";

const DetailOfApp = ({ singleApp }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const installedApp = getDataFromLocalStorage();
  const isInstalled = installedApp.includes(singleApp.id);

  const handleClick = (id) => {
    setDataToLocalStorage(id);
    setIsDisabled(true);
    toast.success("Installed Successfully");
  };

  const {
    id,
    image,
    title,
    ratingAvg,
    downloads,
    companyName,
    reviews,
    ratings,
    description,
  } = singleApp;

  const toMillion = (number) => {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    }
    return number.toString();
  };

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    colors: ["#FF8811"],
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ratings.map((item) => item.name),
    },
  };

  const series = [
    {
      data: ratings.map((item) => item.count),
    },
  ];

  return (
    <div>
      <div className="max-w-[90%] mx-auto mt-8 flex flex-col md:flex-row gap-8">
        <img
          className="w-80 h-80 shadow-md rounded-lg flex justify-center items-center border border-gray-300 p-5"
          src={image}
          alt=""
        />

        <div>
          <div className="my-3 space-y-2">
            <h2 className="font-bold text-3xl text-[#001931]">{title}</h2>
            <p className="tex-[#627382]">
              Developed by:{" "}
              <span className="text-[#632EE3]">{companyName}</span>
            </p>
          </div>
          <div className="border-b border-gray-300"></div>

          <div className="flex items-center gap-10 my-3 flex-col md:flex-row">
            <div className="text-center flex items-center justify-center flex-col space-y-2">
              <FaDownload className="text-2xl text-[#54CF68]" />
              <p>Download</p>
              <h3 className="font-extrabold text-4xl">
                {toMillion(downloads)}
              </h3>
            </div>
            <div className="text-center flex items-center justify-center flex-col space-y-2">
              <FcRating className="text-2xl" />

              <p>Average Rating</p>
              <h3 className="font-extrabold text-4xl">{ratingAvg}</h3>
            </div>
            <div className="text-center flex items-center justify-center flex-col space-y-2">
              <img className="w-9 h-9" src={likeImg} alt="" />
              <p>Download</p>
              <h3 className="font-extrabold text-4xl">{toMillion(reviews)}</h3>
            </div>
          </div>

          <div className="flex justify-center md:justify-start items-center">
            <button
              disabled={isDisabled || isInstalled}
              onClick={() => {
                !isInstalled && handleClick(id);
              }}
              className="btn bg-[#00D390] text-white mt-8 "
            >
              {isDisabled || isInstalled ? "Installed" : "Install Now (291 MB)"}
            </button>
          </div>
        </div>
      </div>
      <div className=" max-w-[90%] mx-auto mt-8 border-b border-gray-300"></div>

      <div className="max-w-[90%] mx-auto mt-4">
        <h4 className="font-semibold">Ratings</h4>
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
      <div className="border-b border-gray-300"></div>

      <div className="max-w-[90%] mx-auto mt-4 space-y-2">
        <h4 className="text-[#001931] text-2xl font-semibold">Description</h4>

        <p className="text-[#627382] leading-8 text-justify">{description}</p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default DetailOfApp;
