var express = require("express"),
  bodyParser = require("body-parser"),
  hbs = require("hbs"),
  path = require("path"),
  cors = require("cors"),
  app = express(),
  port = process.env.PORT || 5000;

var pokemon = require("./PokemonController");

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

app.use(cors());

app.use("/img", express.static("public"));

app.get("/pokedex", pokemon.getPokedex);
app.get("/pokedex/random", pokemon.getRandom);
app.get("/pokedex/:search", pokemon.searchPokedex);
app.get("/collection", pokemon.getCollection);
app.post("/collection", pokemon.addToCollection);
app.delete("/collection/:pokemonId", pokemon.removeFromCollection);

var server = app.listen(port, function() {
  var host = server.address().address,
    port = server.address().port;

  console.log("app listening at http://%s:%s", host, port);
});
