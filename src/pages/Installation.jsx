import React, { useState } from "react";
import { useLoaderData } from "react-router";
import {
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
} from "../Utility/localstorage";
import InstalledApp from "../Components/InstalledApp/InstalledApp";

const Installation = () => {
  const [installedApp, setInstalledApp] = useState(getDataFromLocalStorage());
  const appsData = useLoaderData();

  const handleRemove = (id) => {
    const remainApp = installedApp.filter((data) => data !== id);
    setInstalledApp(remainApp);
    removeDataFromLocalStorage(id);
  };
  console.log(appsData);
  // const installedApps = getDataFromLocalStorage();
  const filteredApps = appsData.filter((item) =>
    installedApp.includes(item.id)
  );
  console.log(filteredApps);
  return (
    <div className=" max-w-[80%] mx-auto mt-10">
      <div className="text-center space-y-3">
        <h3 className="font-bold text-5xl text-[#627382]">
          Your Installed Apps
        </h3>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="mt-10">
        <h4 className="my-3 text-[#001931] font-semibold text-2xl">
          {filteredApps.length} Apps Found
        </h4>
        <div className="space-y-3">
          {filteredApps.map((app) => (
            <InstalledApp
              key={app.id}
              app={app}
              handleRemove={handleRemove}
            ></InstalledApp>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
