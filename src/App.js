import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Display from './components/Display';

function App() {
  const [newData, setData] = useState(false); // Recebe novos dados
  const [loading, setLoading] = useState(true); // O dados estão carregando?

  useEffect(() => {
    axios({
      method: 'GET',
      url:
        'https://cors-anywhere.herokuapp.com/http://covid19api.xapix.io/v2/locations',
    }).then((res) => {
      setData(res.data);
      setLoading(false); // Não está mais carregando
    });
  }, []);

  return (
    <div className="App">
      <header> <h1>COVID-19</h1> </header>
      {loading && <h1 id="loading">Carregando...</h1> /* Tela de carregamento */}
      {!loading && (
        <>
          <Display countryId={28} data={newData}></Display>
          <Display countryId={10} data={newData}></Display>
          <Display countryId={1} data={newData}></Display>
        </>
      )}
    </div>
  );
}

export default App;
