import "./Home.css";
import rickemorty from "./images/rickemorty.jpg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [dados, setDados] = useState();
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <div>
      <div className="container-img">
        <img src={rickemorty} />
      </div>
      <div className="container-busca">
        <h1>Busque seu personagem favorito do Rick e Morty</h1>
        <div className="container-submit">
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search-form">
              <input
                className="input-search"
                type="search"
                placeholder="Digite o nome de um personagem abaixo"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </label>
          </form>
        </div>
      </div>
      <div className="list-character">
        {dados &&
          search(dados.results).map((item, index) => (
            <Link
              to={`personagem/${item.name.replace(" ", "&").toLowerCase()}`}
            >
              <div key={item.id} className="button-character">
                <h2 className="card-name">{item.name}</h2>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Home;
