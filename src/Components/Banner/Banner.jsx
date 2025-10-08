import React from "react";
import googlePlayImg from "../../assets/google-play.png"
import playStoreImg from "../../assets/Group.png"
import bannerImg from "../../assets/hero.png"

const Banner = () => {
  return (
    <div className="text-center flex justify-between items-center flex-col space-y-8 mt-8">
      <h1 className="text-7xl font-semibold">We Build <br /> <span className="text-[#632EE3]">Productive </span> Apps</h1>
      <p className="text-[#627382]">
        At HERO.IO we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      <div className="space-x-4">
           <button className="btn"> <img className="w-7 h-7" src={googlePlayImg} alt="" />  Google Play</button>
           <button className="btn"> <img className="w-7 h-7" src={playStoreImg} alt="" /> Play Store</button>
      </div>

      <img src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
