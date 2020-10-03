import React, { useState } from 'react';
import Card from './styles';

import BodySimpleCard from '../BodySimpleCard';

export default ({dataProps}) => {
  const [countryData, setCountryData] = useState(false);

  return (
    <Card>
      {!countryData && setCountryData(dataProps)}

      {countryData /* Evita que chame locations undefined */ && (
        <>
          <div className="header-card">
            <h2 className={countryData.country.length > 12?"big-name":undefined}>
              {countryData.country} ({countryData.country_code})
            </h2>

          </div>

          <BodySimpleCard dataProps={countryData} />
        </>
      )}
    </Card>
  );
};
