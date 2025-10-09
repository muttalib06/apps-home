import React, { useState } from "react";
import { NavLink, useLoaderData } from "react-router";
import errorImg from "../../assets/App-Error.png"
import App2 from "../../Components/App2/App2";

const Apps = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const apps = useLoaderData();
  const filteredApps = apps.filter((app) => {
    const searchLower = searchTerm.toLowerCase();
    return app.title?.toLowerCase().includes(searchLower);
  });
  return (
    <div className=" md:max-w-[80%] md:mx-auto text-center mt-10">
      <h2 className="text-5xl font-bold my-3">Our All Applications</h2>
      <p className="text-[#627382]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex items-center justify-between">
        <h4 className="md:text-left font-semibold md:text-2xl">
          ({filteredApps.length}) Apps Found
        </h4>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-4 auto-rows-fr mx-3 md:mx-0">
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => <App2 key={app.id} app={app}></App2>)
        ) : (
          <div className="col-span-4 flex justify-center items-center flex-col space-y-2">
                <img className="w-80 h-80" src={errorImg} alt="" />
                <h2 className="font-semibold text-5xl">OPPS!! APP NOT FOUND</h2>
                <p className="text-[#627382]">The App you are requesting is not found on our system.  please try another apps</p>
                 <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white my-8"><NavLink to="/apps">Go Back!</NavLink></button>

          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
