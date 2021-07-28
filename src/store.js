import { makeObservable, observable, computed } from 'mobx';

class Store {
  pokemon = [];
  filter = '';
  selectedItem = null;

  constructor() {
    makeObservable(this, {
      pokemon: observable,
      filter: observable,
      selectedItem: observable,
      filteredPokemon: computed,
    });
  }

  get filteredPokemon() {
    return this.pokemon.filter(({ name: { english } }) =>
      english.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
    );
  }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }

  setFilter(filter) {
    this.filter = filter;
  }

  setSelectedItem(selectedItem) {
    this.selectedItem = selectedItem;
  }
}

const store = new Store();

const url =
  'https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json';
// const url = 'http://localhost:3000/slam-sales/pokemon.json';

// if (typeof window !== 'undefined') {
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((pokemon) => store.setPokemon(pokemon));
// }

export default store;
