import React from "react";
import Navbar from "../Components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Spinner from "../Spinner/Spinner";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state ==="loading";
  return <>
           <Navbar></Navbar>
           {isLoading && <Spinner></Spinner>}

            <Outlet></Outlet>

            <Footer></Footer>
         
  
  
  </>;
};

export default Root;
