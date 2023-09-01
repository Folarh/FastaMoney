import React from "react";
import Header from "./Header/Header";
import RealWorld from "../../components/realworld/RealWorld";
import Market from "../../components/market/Market";
import Studies from "../../components/studies/Studies";
import Business from "../../components/business/Business";

const Layout = () => {
  return (
    <div>
      <Header />
      <RealWorld />
      <Market />
      <Studies />
      <Business />
    </div>
  );
};

export default Layout;
