import React, { Component } from "react";
import axios from "axios";

const Battle = props => {
  return props.pokemon != null ? (
    <div>
      <div>
        <h1>{props.pokemon.name}</h1>
        <h5>VS</h5>
        <h1>{props.opponent.name}</h1>
      </div>
      <h3>
        Winner{" "}
        {props.opponent.total > props.pokemon.total
          ? props.opponent.name
          : props.pokemon.name}
      </h3>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};
export default Battle;
