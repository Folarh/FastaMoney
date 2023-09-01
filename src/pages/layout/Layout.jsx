import React from "react";
import Header from "./Header/Header";
import RealWorld from "../../components/realworld/RealWorld";
import Market from "../../components/market/Market";

const Layout = () => {
  return (
    <div>
      <Header />
      <RealWorld />
      <Market />
    </div>
  );
};

export default Layout;
