"use cliet";
import { navData } from "@/Utils/Variable";
import React from "react";
import NavItem from "../NavItem";

const MenuitemF = () => {
  return (
    <>
      <NavItem key={1} title={"General Analytics"} link={"/"} />;
      <NavItem key={1} title={"Meta Ads"} link={"/"} />;
      <NavItem key={1} title={"Google Ads"} link={"/"} />;
    </>
  );
};

export default MenuitemF;