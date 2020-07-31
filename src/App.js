import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Display from './components/SimpleCard';
import WordCard from './components/WorldCard';
function App() {
  const [newData, setNewData] = useState(false); // Recebe novos dados
  const [loading, setLoading] = useState(true); // O dados estão carregando?
  const [loopSize, setLoopSize] = useState(8); // Quantos cards serão carregados
  // const isMobile = window.innerWidth <= 500;

  useEffect(() => {
    window.scrollTo(0, 0);

    axios({
      method: 'GET',
      url: 'https://covid19api.xapix.io/v2/locations',
    }).then((res) => {
      setNewData(res.data);
      setLoading(false); // Não está mais carregando
    });
  }, []);

  function sortLocationsArray() {
    return Object.values(newData.locations).sort((a, b) =>
      a.latest.confirmed < b.latest.confirmed ? 1 : -1
    );
  }

  function incLoopSize() {
    if (loopSize + 8 < newData.locations.length) setLoopSize(loopSize + 8);

  }

  function generateCardDivs() {
    var cardsDivs = [];

    for (let i = 0; i < loopSize; i++) {
      cardsDivs.push(
        <Display key={i} dataProps={sortLocationsArray()[i]}></Display>
      );
    }

    return cardsDivs;
  }

  return (

    <div className="app">
      <header>
        <a href="/" title="Data Covid" >
          <h1>
            <p>data</p>COVID
          </h1>
        </a>
      </header>

      {loading && (
        /* Tela de carregamento */
        /* https://loading.io */
        <div className="loading-ring">
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      {!loading && (
        /* Carregou */
        <>
          <WordCard dataProps={newData}></WordCard>

          <div className="cards">{generateCardDivs() /* All Cards */}</div>
        </>
      )}

      <div className="button-plus-div">
        {loopSize < 260 && newData !== false ? (
          <button title="Ver mais" onClick={incLoopSize}>+</button>
        ) : (
          false
        )}
      </div>

      <footer>
        <p>
          Desenvolvido por{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            href="https://github.com/Lukenoutte"
          >
            @Lukenoutte
          </a>
        </p>
      </footer>

    </div>
  );
}

export default App;
