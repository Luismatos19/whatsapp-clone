import axios from "axios";
import React, { useEffect, useState } from "react";
import { MoreVert, Search, Mood, AttachFile } from "@material-ui/icons";

import Profile from "../../assets/michael.png";
import { Menssagem } from "../../models/menssagem";
import "./style.scss";

export const Menssagens = (props: any) => {
  const [menssagens, setMenssagens] = useState<Menssagem[]>([]);
  const data: Menssagem[] = [];
  const id = props.id;
  useEffect(() => {
    axios.get("http://localhost:3000/mensagem").then((res) => {
      const resultado = res.data;
      resultado.map((item: Menssagem) => {
        if (item.contatoId === id) {
          data.push(item);
        }
      });
      console.log(props.id);
      setMenssagens(data);
    });
  }, [id]);
  return (
    <>
      <div className="menssagem">
        <div className="menssagem__header">
          <div className="menssagem__contato">
            <img src={Profile} alt="Imagem profile"></img>
            <p>Nome do contato</p>
          </div>
          <div className="menssagem__options">
            <Search sx={{ fontSize: 25 }} />
            <MoreVert sx={{ fontSize: 25 }} />
          </div>
        </div>
        <div className="menssagem__conteudoo">
          <div className="menssagem__todas">
            {menssagens.map((item) => (
              <div className="menssagem__witch">
                <p>{item.conteudo}</p>
              </div>
            ))}
          </div>
         
        </div>
          
          <div className="menssagem__enviar">
            <Mood sx={{ fontSize: 25 }} />
            <AttachFile sx={{ fontSize: 25 }} />
            <input type="text" placeholder="Digite uma mensaagem" />
          </div>
        
      </div>
    </>
  );
};
