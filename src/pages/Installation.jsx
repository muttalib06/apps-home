import React, { useState } from "react";
import { useLoaderData } from "react-router";
import {
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
} from "../Utility/localstorage";
import InstalledApp from "../Components/InstalledApp/InstalledApp";
import { ToastContainer, toast } from "react-toastify";

const Installation = () => {
  const [installedApp, setInstalledApp] = useState(getDataFromLocalStorage());
  const [sortOrder, setSortOrder] = useState("");

  const appsData = useLoaderData();

  const handleRemove = (id) => {
    const remainApp = installedApp.filter((data) => data !== id);
    setInstalledApp(remainApp);
    removeDataFromLocalStorage(id);
    toast.success('Successfully Uninstalled')
  };

  // const installedApps = getDataFromLocalStorage();
  const filteredApps = appsData.filter((item) =>
    installedApp.includes(item.id)
  );

  const sortedApps = [...filteredApps].sort((a, b) => {
    if (sortOrder === "highToLow") {
      return b.downloads - a.downloads;
    } else if (sortOrder === "lowToHigh") {
      return a.downloads - b.downloads;
    }
    return 0;
  });
  const handleHighToLow = () => {
    setSortOrder("highToLow")
  };
  const handleLowToHigh = () => {
    setSortOrder("lowToHigh")
  }

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
        <div className="flex justify-between items-center">
          <h4 className="my-3 text-[#001931] font-semibold text-2xl">
            {filteredApps.length} Apps Found
          </h4>

          <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Size ⬇️
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <button onClick={handleHighToLow}>High-Low</button>
              </li>
              <li>
                <button onClick={handleLowToHigh}>Low-High</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          {sortedApps.map((app) => (
            <InstalledApp
              key={app.id}
              app={app}
              handleRemove={handleRemove}
            ></InstalledApp>
          ))}
        </div>
      </div>
        <ToastContainer />
    </div>
  );
};

export default Installation;
