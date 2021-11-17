import React, { useEffect, useState } from "react";
import {
  Adjust,
  Comment,
  MoreVert,
  NotificationsOff,
} from "@material-ui/icons";

import Profile from "../../assets/michael.png";
import "./style.scss";
import axios from "axios";
import { Contato } from "../../models/contato";

export const Contatos = ({idContato =(item:number) => {}}) => {
  const [contatos, setContatos] = useState<Contato[]>([]);
  

  useEffect(() => {
    axios.get("http://localhost:3000/contato").then((res) => {
      setContatos(res.data);
    });
  }, []);

  

  return (
    <>
      <div className="contatos">
        <div className="contatos__header">
          <div className="contatos__img">
            <img src={Profile} alt="Imagem profile"></img>
          </div>
          <div className="contatos__options">
            <Adjust sx={{ fontSize: 25 }} />
            <Comment sx={{ fontSize: 25 }} />
            <MoreVert sx={{ fontSize: 25 }} />
          </div>
        </div>
        <div className="contatos__notificacao notificacao">
          <div className="notificacao__img">
            <NotificationsOff />
          </div>
          <div className="notificacao__texto">
            <p>Receba notificações de novas menssagens</p>
            <p>Ativar notificações na área de trabalho </p>
          </div>
        </div>
        <div className="contatos__pesquisar">
          <input type="text" placeholder="Pesquisar ou começar uma nova conversa"/>
        </div>
        <div className="contatos__list list">
          {contatos.map((item) => (
            <div className="list__item" onClick={() =>{idContato(item.id)}}>
              <img src={item.imagemUrl} alt="contato foto" />
              <p key={item.nome}>{item.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
