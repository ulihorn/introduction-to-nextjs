import React from 'react';
import styled from '@emotion/styled';
import { CssBaseline } from '@material-ui/core';
import PokemonInfo from '../components/PokemonInfo';
import PokemonFilter from '../components/PokemonFilter';
import PokemonTable from '../components/PokemonTable';
import store from '../src/store';

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800;
  paddingtop: 1rem;
`;

export async function getServerSideProps(context) {
  const pokemon = await (
    await fetch('http://localhost:3000/pokemon.json')
  ).json();
  return {
    props: { pokemon }, // will be passed to the page component as props
  };
}

const Home = ({ pokemon }) => {
  // console.log('pokemon: ', pokemon);
  store.setPokemon(pokemon);
  return (
    <Container>
      <CssBaseline />
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <PokemonInfo />
      </TwoColumnLayout>
    </Container>
  );
};

export default Home;
