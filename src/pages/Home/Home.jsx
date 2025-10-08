import React, { Suspense } from "react";
import Banner from "../../Components/Banner/Banner";
import TrustedCard from "../../Components/TrustedCard/TrustedCard";
import TrendingApps from "../../Components/TrendingApps/TrendingApps";

const appPromise = () => {
  return fetch("/apps8.json").then((res) => res.json());
};
const appsDataPromise = appPromise()

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <TrustedCard></TrustedCard>
      <Suspense>
         <TrendingApps appsDataPromise = {appsDataPromise}></TrendingApps>
      </Suspense>
    </>
  );
};

export default Home;
