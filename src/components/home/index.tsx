import React from "react";
import { Contatos } from "../contatos";
import "./style.scss";

export const Home = () => {
  return (
    <>
      <div className="header"></div>
      <div className="content">
          <Contatos />
      </div>
    </>
  );
};
