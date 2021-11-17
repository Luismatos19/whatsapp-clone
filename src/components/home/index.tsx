import React, { useState } from "react";
import { Contatos } from "../contatos";
import { Menssagens } from "../menssagens";
import "./style.scss";

export const Home = () => {
  const [id, setId] = useState<number>(0)

  const contatoId = (data:number) => {
    setId(data);
    
  }
  return (
    <>
      <div className="header"></div>
      <div className="content">
          <Contatos idContato={contatoId}/>
          <Menssagens id={id}/>
      </div>
    </>
  );
};
