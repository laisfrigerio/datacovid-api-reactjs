import React, { useState } from 'react';

import './Display.css';

export default (props) => {
  const [locationsList, setLocationsList] = useState(false); // Pega o Object com todas as localizações

  function dotsNumber(number){ // Adicionar pontos aos números
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
   }

  return (
    <div>
      <div className="blocoDisplay">
        {
          !locationsList &&
            setLocationsList(
              props.dataProps.locations[props.countryId]
            ) /* Pega as localizações com o id passado nos props  */
        }

        {locationsList /* Evita que chame locations undefined */ && (
          <>
            <div className="headerBlocoDisplay">
              <h1>
                {locationsList.country} ({locationsList.country_code})
              </h1>
            </div>
            <div className="informationBlocoDisplay">
            <p><strong>Casos:</strong> {dotsNumber(locationsList.latest.confirmed)}</p>
            <br/>
            <p><strong>Mortes:</strong> {dotsNumber(locationsList.latest.deaths)}</p>
            <br/>
            <p><strong>População:</strong> {dotsNumber(locationsList.country_population)}</p>
            </div>
          </>
        )}
      </div>

    </div>

  );
};
