import React from "react";
import Header from "./Header/Header";
import RealWorld from "../../components/realworld/RealWorld";
import Market from "../../components/market/Market";
import Studies from "../../components/studies/Studies";
import Business from "../../components/business/Business";
import Faq from "../../components/faq/Faq";
import Comments from "../../components/comments/Comments";
import ConsultSolutions from "../../components/solutions/ConsultSolutions";
import Rate from "../../components/rate/Rate";

const Layout = () => {
  return (
    <div>
      <Header />
      <RealWorld />
      <Market />
      <Studies />
      <Business />
      <Faq />
      <Comments />
      <ConsultSolutions />
      <Rate />
    </div>
  );
};

export default Layout;
