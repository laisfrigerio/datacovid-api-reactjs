import React, { useState } from 'react';

import './SimpleCard.css';
import BodySimpleCard from "./BodySimpleCard";
export default (props) => {
  const [countryData, setCountryData] = useState(false);



  return (
    <div className="simple-card">
      {!countryData && setCountryData(props.dataProps)}

      {countryData /* Evita que chame locations undefined */ && (
        <>
          <div className="header-card">
            {countryData.country.length < 12 ? (
              <h2>
                {countryData.country} ({countryData.country_code})
              </h2>
            ) : (
              <h3>
                {countryData.country} ({countryData.country_code})
              </h3>
            )}
          </div>

          <BodySimpleCard dataProps={countryData}></BodySimpleCard>
        </>
      )}
    </div>
  );
};
