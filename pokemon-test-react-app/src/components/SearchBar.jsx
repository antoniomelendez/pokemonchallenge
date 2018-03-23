import React, { Component } from "react";
import { AutoComplete } from "material-ui";
import axios from "axios";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      pokedexNames: []
    };
  }

  componentWillMount = () => {
    axios.get("http://localhost:5000/pokedex").then(response => {
      this.setState({
        pokedexNames: response.data.data.map(pokemon => pokemon.name)
      });
    });
  };

  searchPokedex = () => {
    axios.get(`http://localhost:5000/pokedex/${this.state.searchText}`);
  };

  updateSearchText = event => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    return (
      <div
        style={{
          margin: "15px",
          border: "1px solid lightGrey",
          paddingLeft: "10px"
        }}
      >
        <div className="search-bar-contents container">
          <form onSubmit={() => this.searchPokedex}>
            <div className="input-group">
              <AutoComplete
                id="searchValue"
                style={{ backgroundColor: "#ffffff", width: "100%" }}
                underlineShow={false}
                placeholder="Search Pokèmon"
                className="search-field form-control"
                type="text"
                dataSource={this.state.pokedexNames}
                value={this.state.searchText}
                onChange={this.updateSearchText}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
