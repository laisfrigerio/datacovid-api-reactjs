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

  function dotsNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  function sortLocationsArray(){

    return Object.values(newData.locations).sort((a, b) => (a.latest.deaths < b.latest.deaths) ? 1 : -1)

  }

  function generateDivs() {

    var displayDivs = [];

    for (let i = 0; i < 16; i++) {
      displayDivs.push(<Display key={i} dataProps={sortLocationsArray()[i]}></Display>);

    }

    return displayDivs;
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
      {loading && <h1 id="loadingText">...</h1> /* Tela de carregamento */}
      {!loading && (
        <>

          <div className="displayMundo">
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

          {generateDivs()}


        </>
      )}

         <footer></footer>
    </div>
  );
}

export default App;
