import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemondCard';

/*hier maak je verbinding met pokeapi
Je kan alles ophalen door pokemon in te vullen maar ik heb
er een limit opgezet zodat de originele 151 worden opgehaald*/
export default class PokemonList extends Component {
    state={
        url: 'https://pokeapi.co/api/v2/pokemon?limit=151',
        pokemon: null
    };

   async componentDidMount () {
const res = await axios.get(this.state.url);
this.setState({pokemon: res.data['results'] });
    }

  render() {
    return (
        <React.Fragment>
        {this.state.pokemon ? (    
        <div className="row">
        {this.state.pokemon.map(pokemon => (
            <PokemonCard
            key={pokemon.name} /* als geen key wordt meegegeven krijg je een error, pokemon namen zijn uniek dit voorkomt de error*/
            name={pokemon.name}
            url={pokemon.url}
            />
        ))}
            </div>
            ) : (
            <h1>Pokedex Loading</h1>)}
            </React.Fragment>

    );
  }
}