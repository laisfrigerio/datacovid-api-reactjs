import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import './App.css';
import Display from './components/SimpleCard';
import WordCard from './components/WorldCard';
import Footer from './components/Footer';
import { ExpandLess, Add } from '@material-ui/icons';

function App() {
  const [newData, setNewData] = useState(false); // Recebe novos dados
  const [loading, setLoading] = useState(true); // O dados estão carregando?
  const [loopSize, setLoopSize] = useState(8); // Quantos cards serão carregados
  const focusElement = useRef(null);

  useEffect(() => {
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
    focusElement.current.focus()
    if (loopSize + 8 < newData.locations.length) setLoopSize(loopSize + 8);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
        <a href="/" title="Data Covid">
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

          <div ref={focusElement} tabIndex="0" className="cards">
            {generateCardDivs() /* Todos os Cards */}

            <div className="button-plus-div"> 
              {loopSize < 260 && newData !== false ? (
                <button title="Ver mais" onClick={incLoopSize}>
                  <Add></Add>
                </button>
              ) : (
                false
              )}
            </div>

          </div>
        </>
      )}

      {loopSize > 30 ? (
        <div className="button-scrolltop-div">
          <button title="Subir" onClick={scrollToTop}>
            <ExpandLess className="icon"></ExpandLess>
          </button>
        </div>
      ) : (
        false
      )}

      <Footer></Footer>
    </div>
  );
}

export default App;
