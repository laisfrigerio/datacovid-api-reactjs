import React, { useState } from 'react';

import './Display.css';

export default (props) => {
  const [locations, setLocations] = useState(false); // Pega o Object com todas as localizações

  return (
    <div>
      <div className="bloco">
        {
          !locations &&
            setLocations(
              props.data.locations[props.countryId]
            ) /* Pega as localizações com o id passado nos props  */
        }

        {locations /* Evita que chame locations undefined */ && (
          <>
            <div className="headerBloco">
              <h1>
                {locations.country} ({locations.country_code})
              </h1>
            </div>
            <div className="information">
            <p><strong>Casos confirmados:</strong> {locations.latest.confirmed}</p>
            <br/>
            <p><strong>Mortes:</strong> {locations.latest.deaths}</p>
            <br/>
            <p><strong>Data da ultima atualização:</strong>  {locations.last_updated}</p>
            <br/>
            <p><strong>População:</strong> {locations.country_population}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
