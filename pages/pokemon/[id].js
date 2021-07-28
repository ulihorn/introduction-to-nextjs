import {
  CssBaseline,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import styled from '@emotion/styled';
import router, { withRouter } from 'next/router';

// import store from '../../src/store';

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;

export async function getServerSideProps(context) {
  const allPokemon = await (
    await fetch('http://localhost:3000/pokemon.json')
  ).json();
  const pokemon = allPokemon.find(
    ({ id }) => id.toString() === context.query.id
  );
  return {
    props: {
      pokemon,
    },
  };
}

export default withRouter(({ pokemon }) => {
  // const pokemon = store.pokemon.find(
  //   ({ id }) => id.toString() === router.query.id
  // );
  return (
    <PageContainer>
      <CssBaseline />
      {pokemon && (
        <div>
          <h1>{pokemon.name.english}</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Attribute</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(pokemon.base).map((k) => (
                <TableRow>
                  <TableCell>{k}</TableCell>
                  <TableCell>{pokemon.base[k]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </PageContainer>
  );
});
