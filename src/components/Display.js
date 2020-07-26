import React, { useState} from "react";

import "./Display.css";

export default (props) => {
  const [locations, setLocations] = useState(false); // Pega o Object com todas as localizações

  return (
    <div>
      <div className="bloco">
        {
          !locations &&
            setLocations(props.data.locations[props.countryId]) /* Pega as localizações com o id passado nos props  */
        }

        {locations &&  /* Evita que chame locations undefined */ 
            <>
        <h1>
          {locations.country} ({locations.country_code})
        </h1>
        <p>Casos confirmados: {locations.latest.confirmed}</p>
        <p>Mortes: {locations.latest.deaths}</p>
        <p>Data da ultima atualização: {locations.last_updated}</p>
        <p>População: {locations.country_population}</p>
   
        </>
          }
      </div>
    </div>
  );
};
