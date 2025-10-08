import React, { use } from "react";
import App from "../App/App";
import Spinner from "../../Spinner/Spinner";

const TrendingApps = ({ appsDataPromise }) => {
  const appsData = use(appsDataPromise);
  console.log(appsData);
  return (
    <div className="max-w-[80%] mx-auto text-center mt-10">
      <h2 className="text-5xl font-bold my-3">Trending App</h2>
      <p className="text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-4 mt-8 gap-4">
       {appsData.map(app => <App key={app.id} app={app}></App>)}
      </div>
    </div>
  );
};

export default TrendingApps;
