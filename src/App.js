import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Display from './components/Display';

function App() {
  const [newData, setNewData] = useState(false); // Recebe novos dados
  const [loading, setLoading] = useState(true); // O dados estão carregando?
  const [loopSize, setLoopSize] = useState(8);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://covid19api.xapix.io/v2/locations',
    }).then((res) => {
      setNewData(res.data);
      setLoading(false); // Não está mais carregando
    });
  }, []);

  function dotsNumber(number) {
    return number !== null
      ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      : '?';
  }

  function sortLocationsArray() {
    return Object.values(newData.locations).sort((a, b) =>
      a.latest.confirmed < b.latest.confirmed ? 1 : -1
    );
  }

  function incLoopSize() {
    if (loopSize + 8 < newData.locations.length) setLoopSize(loopSize + 8);
  }

  function generateDivs() {
    var cardsDivs = [];

    for (let i = 0; i < loopSize; i++) {
      cardsDivs.push(
        <Display key={i} dataProps={sortLocationsArray()[i]}></Display>
      );
    }

    return cardsDivs;
  }

  function formatDateString(date) {
    let onlyDate = date.slice(0, -17);
    let year = onlyDate.slice(0, -6);
    let month = onlyDate.slice(5, -3);
    let day = onlyDate.slice(8, 10);
    return day + '/' + month + '/' + year;
  }

  return (
    <div className="App">
      <header>
        <h1>COVID-19</h1>
      </header>
      {
        loading &&
        /* Tela de carregamento */
        /* https://loading.io */
          <>
          <div className="lds-ring"><div></div><div></div><div></div></div>
          </>

      }
      {!loading && (
        /* Carregou */
        <>
          <div className="displayWorld">
            <h2>Mundo</h2>
            <p>
              <strong>Casos confirmados: </strong>
              {dotsNumber(newData.latest.confirmed)}
            </p>
            <p>
              <strong>Mortes:</strong> {dotsNumber(newData.latest.deaths)}
            </p>
            <p>
              <strong>Última atualização: </strong>
              {formatDateString(newData.locations[0].last_updated)}
            </p>
          </div>
          <div className="cards">{generateDivs()}</div>
        </>
      )}
      <div className="buttonPlusDiv">
        {loopSize < 260 && newData !== false? (
          <button
            onClick={() => {
              incLoopSize();
            }}>+</button>) : (false)}
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
