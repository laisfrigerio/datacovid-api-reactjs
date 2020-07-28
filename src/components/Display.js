import React, { useState } from 'react';

import './Display.css';

export default (props) => {
  const [countryData, setCountryData] = useState(false);

  function dotsNumber(number) {
    // Adicionar pontos aos números
    return number !== null?number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'):"?";
  }

  return (

      <div className="cardDisplay">
        {!countryData && setCountryData(props.dataProps)}

        {countryData /* Evita que chame locations undefined */ && (
          <>
            <div className="headerCardDisplay">
              <h1>
                {countryData.country} ({countryData.country_code})
              </h1>
            </div>
            <div className="informationCardDisplay">
              <p>
                <strong>Casos: </strong>
                {dotsNumber(countryData.latest.confirmed)}
              </p>
              <br />
              <p>
                <strong>Mortes: </strong> {dotsNumber(countryData.latest.deaths)}
              </p>
              <br />
              <p>
                <strong>População: </strong>
                {dotsNumber(countryData.country_population)}
              </p>
            </div>
          </>
        )}
      </div>

  );
};
