import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import './App.css';
import Display from './components/SimpleCard';
import WorldCard from './components/WorldCard';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Spinner from './components/Spinner';
import GlobalStyle from './styles/global';
import { Add } from '@material-ui/icons';

function App() {
  const [dataFromApi, setDataFromApi] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loopSizeFromCards, setLoopSizeFromCards] = useState(8);
  const focusElement = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {

    axios({
      method: 'GET',
      url: 'https://covid19api.xapix.io/v2/locations',
    }).then((res) => {
      setDataFromApi(res.data);
      setIsLoading(false);
    }).catch(error => {
      if(error.status){
        setError(error.status);
      }else{
        setError(error);
      }

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
    <>
      <GlobalStyle />
      <div className="app flex-just-center">
        <Header />

        {isLoading && !error && (
          /* Anel de carregamento */
          /* https://loading.io */
          <Spinner />
          /* Fim do anel de carregamento */
        )}
        {isLoading && error !== false &&
        /*Erro */
        <div className="error-div">
        <h2>Ops! Ocorreu um erro :(</h2>
        </div>
        }

        {!isLoading && (
          <>
            <WorldCard dataProps={dataFromApi}></WorldCard>

            <div ref={focusElement} tabIndex="0" className="all-cards flex-just-center">
              {generateCardDivs() /* Todos os Cards */}

              <div className="button-plus-div flex-just-alig-center">
                {loopSizeFromCards < 260 && dataFromApi !== false ? (
                  <button className="flex-just-alig-center" title="Ver mais" onClick={increaceLoopSize}>
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
          <ScrollToTop onClick={scrollToTop} />
        ) : (false)}

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
