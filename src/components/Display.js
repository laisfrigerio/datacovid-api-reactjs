import React, { useState } from 'react';

import './Display.css';

export default (props) => {
  const [locationsList, setLocationsList] = useState(false); // Pega o Object com todas as localizações

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
            <p><strong>Casos:</strong> {locationsList.latest.confirmed}</p>
            <br/>
            <p><strong>Mortes:</strong> {locationsList.latest.deaths}</p>
            <br/>
            <p><strong>População:</strong> {locationsList.country_population}</p>
            </div>
          </>
        )}
      </div>

    </div>

  );
};
