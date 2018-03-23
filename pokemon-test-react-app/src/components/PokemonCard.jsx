import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import axios from "axios";
const releasePokemon = id => {
  console.log(id);
  axios.delete(`http://localhost:5000/collection/${id}`);
};
const PokemonCard = props => {
  let actions;
  actions = (
    <CardActions style={{ textAlign: "center" }}>
      <FlatButton
        onClick={() => props.iChooseYou(props.index)}
        label="Choose for battle"
      />
      <FlatButton
        onClick={() => releasePokemon(props.id)}
        label="Release into wild"
      />
    </CardActions>
  );
  return (
    <Card
      style={{
        width: "300px",
        margin: "10px"
      }}
    >
      <CardMedia
        overlay={<CardTitle title={props.name} subtitle={props.type} />}
      >
        <img
          src={`http://localhost:5000/img/${props.id}.svg`}
          alt=""
          style={{ height: "300px", width: "300px" }}
        />
      </CardMedia>
      <CardText>
        <h3>HP: {props.hp}</h3>
        <h3>Attack: {props.attack}</h3>
        <h3>Defense: {props.defense}</h3>
      </CardText>
      {actions}
    </Card>
  );
};

export default PokemonCard;
