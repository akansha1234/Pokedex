import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Modal from "./Modal";
const CardThumbnail = ({ pokemon }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        className="card-top"
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        alt="pokemons"
      />
      <Card.Body>
        <h3>Name: {pokemon.name}</h3>
        <h3>Type: {pokemon.types[0].type.name}</h3>
        <h3>Id: {pokemon.id}</h3>
      </Card.Body>
      <Button variant="secondary" onClick={() => setModalShow(true)}>
        Click to open
      </Button>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={pokemon.name}
        image={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        stat1={pokemon.stats[0].stat.name}
        stat2={pokemon.stats[1].stat.name}
        stat3={pokemon.stats[2].stat.name}
        stat4={pokemon.stats[3].stat.name}
        stat5={pokemon.stats[4].stat.name}
        stat6={pokemon.stats[5].stat.name}
      />
    </Card>
  );
};
export default CardThumbnail;
