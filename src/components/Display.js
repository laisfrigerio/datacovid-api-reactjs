import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Display.css";

export default (props) => {
  const [newData, setData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://covid19api.xapix.io/v2/locations",
    }).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading && <h1>Carregando...</h1>}
      <div className="bloco">
        {!loading && (
          <>
            {!locations && setLocations(newData.locations[props.countryId])}
            {locations && 
              <>
                <h1>
                  {locations.country} ({locations.country_code})
                </h1>
                <p>Casos confirmados: {locations.latest.confirmed}</p>
                <p>Mortes: {locations.latest.deaths}</p>
                <p>Data da ultima atualização: {locations.last_updated}</p>
                <p>População: {locations.country_population}</p>
                {console.log(locations)}
              </>
            }
          </>
        )}
      </div>
    </div>
  );
};
