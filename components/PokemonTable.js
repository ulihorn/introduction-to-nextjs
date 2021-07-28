// import React from 'react';
import { observer } from 'mobx-react';
import store from '../src/store';
import PokemonRow from './PokemonRow';

const PokemonTable = () => {
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {store.filteredPokemon.slice(0, 20).map((pokemon) => (
          <PokemonRow
            key={pokemon.id}
            pokemon={pokemon}
            onSelect={(pokemon) => store.setSelectedItem(pokemon)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default observer(PokemonTable);
