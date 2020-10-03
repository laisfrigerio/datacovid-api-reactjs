import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import './App.css';
import Display from './components/SimpleCard';
import WorldCard from './components/WorldCard';
import Footer from './components/Footer';
import Header from './components/Header';
import ListCard from './components/ListCard';
import ScrollToTop from './components/ScrollToTop';
import Spinner from './components/Spinner';
import GlobalStyle from './styles/global';

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
        <Spinner isLoading={isLoading} error={error} />

        {isLoading && error !== false &&
          /*Erro */
          <div className="error-div">
            <h2>Ops! Ocorreu um erro :(</h2>
          </div>
        }

        {!isLoading && (
          <>
            <WorldCard dataProps={dataFromApi}></WorldCard>
            <ListCard 
              dataFromApi={dataFromApi} 
              focusElement={focusElement}
              generateCardDivs={generateCardDivs} 
              loopSizeFromCards={loopSizeFromCards} 
              onClick={increaceLoopSize} 
            />
          </>
        )}

        <ScrollToTop loopSizeFromCards={loopSizeFromCards} />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
