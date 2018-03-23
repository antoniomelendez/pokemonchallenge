import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import axios from "axios";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

import PokemonCard from "./components/PokemonCard";
import SearchBar from "./components/SearchBar";
import Battle from "./components/Battle";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: [],
      battleOngoing: false,
      index: 0,
      opponent: {}
    };

    this.handleEndBattle = this.handleEndBattle.bind(this);
  }

  componentWillMount() {
    axios.get("http://localhost:5000/collection").then(response => {
      this.setState({
        collection: response.data.data
      });
    });
  }

  handleEndBattle = () => {
    this.setState({
      battleOngoing: false
    });
  };

  iChooseYou = index => {
    this.setState({ index: index, battleOngoing: true }, () => {
      axios.get("http://localhost:5000/pokedex/random").then(response => {
        this.setState({ opponent: response.data.data });
      });
    });
  };

  render() {
    const collection = this.state.collection.map((pokemon, i) => {
      return (
        <PokemonCard
          releasePokemon={this.releasePokemon}
          key={i}
          index={i}
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          attack={pokemon.attack}
          hp={pokemon.hp}
          defense={pokemon.defense}
          iChooseYou={this.iChooseYou}
        />
      );
    });
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="Pokemon Battle App" />

          <SearchBar />

          <h1 style={{ marginLeft: "15px", fontFamily: "Roboto" }}>
            My Collection
          </h1>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around"
            }}
          >
            {collection}
          </div>

          <Dialog
            actions={[
              <FlatButton
                key={1}
                label="End Battle"
                primary
                onClick={this.handleEndBattle}
              />
            ]}
            open={this.state.battleOngoing}
            modal
          >
            <Battle
              opponent={this.state.opponent}
              pokemon={this.state.collection[this.state.index]}
            />
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
