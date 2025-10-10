import React from "react";
import errorImg from "../../assets/error-404.png"

const ErrorPage = () => {
  return (
    <div className="col-span-4 flex justify-center items-center flex-col space-y-2 h-screen">
      <img className="w-80 h-80" src={errorImg} alt="" />
      <h2 className="font-semibold text-3xl md:text-5xl">Oops, page not found!</h2>
      <p className="text-[#627382]">
       The page you are looking for is not available.
      </p>
      <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white my-8">
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;
