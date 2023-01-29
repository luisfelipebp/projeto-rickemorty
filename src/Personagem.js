import "./Personagem.css";
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Personagem() {
  const [dados, setDados] = useState();

  const params = useParams();

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${params.name}`)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, [params]);

  return (
    <div className="container-personagem">
      {dados && (
        <div>
          <h1>{dados.results[0].name}</h1>
          <img src={dados.results[0].image} />
          <p>Status : {dados.results[0].status}</p>
          <p>Especie : {dados.results[0].species}</p>
          <p>Genêro : {dados.results[0].gender}</p>
        </div>
      )}
      <Link to="/">
        <button className="link-button">Voltar</button>
      </Link>
    </div>
  );
}

export default Personagem;
