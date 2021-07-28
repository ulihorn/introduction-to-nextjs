// import React from 'react';
import { observer } from 'mobx-react';
import store from '../src/store';
import styled from '@emotion/styled';

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => (
  <Input
    type='text'
    value={store.filter}
    onChange={(e) => store.setFilter(e.target.value)}
  />
);

export default observer(PokemonFilter);
