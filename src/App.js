import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Display from './components/Display';

function App() {
  const [newData, setNewData] = useState(false); // Recebe novos dados
  const [loading, setLoading] = useState(true); // O dados estão carregando?

  useEffect(() => {
    axios({
      method: 'GET',
      url:
        'https://cors-anywhere.herokuapp.com/http://covid19api.xapix.io/v2/locations',
    }).then((res) => {
      setNewData(res.data);
      setLoading(false); // Não está mais carregando
    });
  }, []);

  return (
    <div className="App">
      <header> <h1>COVID-19</h1> </header>
      {loading && <h1 id="loadingText">...</h1> /* Tela de carregamento */}
      {!loading && (
        <>
          <div className="displayMundo">
            <h1>Mundo</h1>
      <p>Casos confirmados: {newData.latest.confirmed}</p>
      <p>Mortes: {newData.latest.deaths}</p>
          </div>
          <Display countryId={225} dataProps={newData}></Display>
          <Display countryId={28} dataProps={newData}></Display>
          <Display countryId={131} dataProps={newData}></Display>
          <Display countryId={187} dataProps={newData}></Display>
          <Display countryId={200} dataProps={newData}></Display>
          <Display countryId={158} dataProps={newData}></Display>
          <Display countryId={181} dataProps={newData}></Display>
          <Display countryId={48} dataProps={newData}></Display>
          {console.log(newData)}
        </>
      )}
    <footer></footer>
    </div>
  );
}

export default App;
