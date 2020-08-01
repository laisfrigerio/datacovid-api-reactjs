import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import './App.css';
import Display from './components/SimpleCard';
import WorldCard from './components/WorldCard';
import Footer from './components/Footer';
import { ExpandLess, Add } from '@material-ui/icons';

function App() {
  const [dataFromApi, setDataFromApi] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loopSizeFromCards, setLoopSizeFromCards] = useState(8);
  const focusElement = useRef(null);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://covid19api.xapix.io/v2/locations',
    }).then((res) => {
      setDataFromApi(res.data);
      setIsLoading(false);
    });
  }, []);

  function sortLocationsArray() {
    return Object.values(dataFromApi.locations).sort((a, b) =>
      a.latest.confirmed < b.latest.confirmed ? 1 : -1
    );
  }

  function increaceLoopSize() {
    focusElement.current.focus(); // Foca na div dos Cards
    if (loopSizeFromCards + 8 < dataFromApi.locations.length)
      setLoopSizeFromCards(loopSizeFromCards + 8);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function generateCardDivs() {
    var cardsDivs = [];

    for (let i = 0; i < loopSizeFromCards; i++) {
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

      {isLoading && (
        /* Anel de carregamento */
        /* https://loading.io */
        <div className="loading-ring">
          <div></div>
          <div></div>
          <div></div>
        </div>
        /* Fim do anel de carregamento */
      )}

      {!isLoading && (
        <>
          <WorldCard dataProps={dataFromApi}></WorldCard>

          <div ref={focusElement} tabIndex="0" className="all-cards">
            {generateCardDivs() /* Todos os Cards */}

            <div className="button-plus-div">
              {loopSizeFromCards < 260 && dataFromApi !== false ? (
                <button title="Ver mais" onClick={increaceLoopSize}>
                  <Add></Add>
                </button>
              ) : (
                false
              )}
            </div>
          </div>
        </>
      )}

      {loopSizeFromCards > 30 ? (
        <div className="button-scrolltop-div">
          <button title="Subir" onClick={scrollToTop}>
            <ExpandLess className="icon"></ExpandLess>
          </button>
        </div>
      ) : (false)}

      <Footer></Footer>
    </div>
  );
}

export default App;
