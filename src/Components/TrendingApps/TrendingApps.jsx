import React, { use } from "react";
import App from "../App/App";
import { NavLink } from "react-router";

const TrendingApps = ({ appsDataPromise }) => {
  const appsData = use(appsDataPromise);

  return (
    <div className="md:max-w-[80%] md:mx-auto text-center mt-10">
      <h2 className="text-5xl font-bold my-3">Trending App</h2>
      <p className="text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-4 mx-3 md:mx-0">
       {appsData.map(app => <App key={app.id} app={app}></App>)}
      </div>
       <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white my-8"><NavLink onClick={() => window.scrollTo(0,0)} to="/apps">Show All</NavLink></button>
    </div>
  );
};

export default TrendingApps;
