import React from "react";
import heroImg from "../../assets/logo.png";
import { NavLink } from "react-router";
import { Github } from "lucide";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  const handleGithubOpen = () => {
    window.open("https://github.com/muttalib06", "_blank");
  };
  return (
    <div className="navbar bg-base-100 shadow-sm flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between px-6">
      <div>
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src={heroImg} alt="" />
          <h2 className="text-[#632EE3] font-bold">HERO.IO</h2>
        </div>
      </div>
      <div className="space-x-5 font-medium">
        <NavLink
          className={({isActive}) => {
           return  isActive ? "text-[#632EE3] border-b" : "";
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink  className={({isActive}) => {
           return  isActive ? "text-[#632EE3] border-b" : "";
          }} to="/apps">Apps</NavLink>
        <NavLink  className={({isActive}) => {
           return  isActive ? "text-[#632EE3] border-b" : "";
          }} to="/installation">Installation</NavLink>
      </div>

      <div>
        <button
          onClick={handleGithubOpen}
          className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
        >
          <FaGithub></FaGithub> Contribute
        </button>
      </div>
    </div>
  );
};

export default Navbar;
