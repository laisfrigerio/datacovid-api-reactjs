import React, { useState } from 'react';

import './SimpleCard.css';
import BodySimpleCard from './BodySimpleCard';
export default (props) => {
  const [countryData, setCountryData] = useState(false);

  return (
    <div className="simple-card">
      {!countryData && setCountryData(props.dataProps)}

      {countryData /* Evita que chame locations undefined */ && (
        <>
          <div className="header-card">
            <h2 className={countryData.country.length > 12?"big-name":undefined}>
              {countryData.country} ({countryData.country_code})
            </h2>

          </div>

          <BodySimpleCard dataProps={countryData}></BodySimpleCard>
        </>
      )}
    </div>
  );
};
