import React from "react";
import "./Pokecard.css";

const POKE_API =
  "https://raw.githubusercontent.com/" +
  "PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard(props) {
  let imgSrc = `${POKE_API}${props.id}.png`;
  return (
    <div className="Pokecard">
      <div className="Pokecard-title">Name: {props.name}</div>
      <img className="Pokecard-image" src={imgSrc} />
      <div className="Pokecard-type">Type: {props.type}</div>
      <div className="Pokecard-exp">EXP: {props.exp}</div>
    </div>
  );
}
export default Pokecard;
