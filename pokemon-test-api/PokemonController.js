const data = require("./data");

const getRandom = (req, res) => {
  const random = Math.floor(Math.random() * data.pokedex.length) + 1;
  res.status(200).send({ data: data.pokedex[random] });
};

const getPokedex = (req, res) => {
  res.status(200).send({ data: data.pokedex });
};

const searchPokedex = (req, res) => {
  const search = req.params.search;
  const results = data.pokedex.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  });
  res.status(200).send({ data: results });
};

const getCollection = (req, res) => {
  res.status(200).send({ data: data.collection });
};

const addToCollection = (req, res) => {
  for (let i = data.pokedex.length - 1; i >= 0; i--) {
    if (data.pokedex[i].id === req.body.pokemonId) {
      let exists = false;
      for (let x = data.collection.length - 1; x >= 0; x--) {
        if (data.collection[x].id === req.body.pokemonId) {
          exists = true;
        }
      }
      if (!exists) {
        data.collection.push(data.pokedex[i]);
      }
      break;
    }
  }
  res.status(201).send({ data: data.collection });
};

const removeFromCollection = (req, res) => {
  data.collection = data.collection.filter(pokemon => {
    if (pokemon.id !== parseInt(req.params.pokemonId)) {
      return true;
    }
  });
  res.status(204).send();
};

module.exports = {
  getRandom,
  searchPokedex,
  getCollection,
  addToCollection,
  removeFromCollection,
  getPokedex
};
