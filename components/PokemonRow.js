import Link from 'next/link';
import { Button } from '@material-ui/core';

import PokemonType from '../src/PokemonType';

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a>{pokemon.name.english}</a>
      </Link>
    </td>
    {/* <td>{pokemon.name.english}</td> */}
    <td>{pokemon.type.join(', ')}</td>
    <td>
      <Button
        variant='contained'
        color='primary'
        onClick={() => onSelect(pokemon)}
      >
        More Information
      </Button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PokemonType,
};

export default PokemonRow;
