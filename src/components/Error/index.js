import React from 'react';
import Error from './styles';

export default ({isLoading, error}) => {

  if (isLoading && error !== false) {
    return (
      /*Erro */
      <Error>
        <h2>Ops! Ocorreu um erro :(</h2>
      </Error>
    );
  }

  return null;
};
