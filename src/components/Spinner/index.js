import React from 'react';
import Spinner from './styles';

export default ({isLoading, error}) => {

  /* Anel de carregamento */
  /* https://loading.io */
  if (isLoading && !error) {
    return (
      <Spinner>
        <div></div>
        <div></div>
        <div></div>
      </Spinner>
    );
  }

  return null;
};