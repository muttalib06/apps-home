import React from "react";
import { useLoaderData, useParams } from "react-router";
import DetailOfApp from "../../Components/DetailOfApp/DetailOfApp";

const AppDetail = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const apps = useLoaderData();
  const singleApp = apps.find((app) => app.id === appId);
  console.log(singleApp);

  return <DetailOfApp singleApp={singleApp}></DetailOfApp>;
};

export default AppDetail;
