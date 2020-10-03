import React from 'react';
import BodyCard from './styles';

export default (props) => {

  function putDotsOnNumber(number) {
      return number !== null
      ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'): '?';
  }

  return(

    <BodyCard className="body-card">
      <p>
        <strong>Casos: </strong>
        {putDotsOnNumber(props.dataProps.latest.confirmed)}
      </p>

      <br />

      <p>
        <strong>Mortes: </strong> {putDotsOnNumber(props.dataProps.latest.deaths)}
      </p>
      {props.dataProps.province === '' ? (
          <>
            <br />
            <p>
              <strong>População: </strong>
              {putDotsOnNumber(props.dataProps.country_population)}
            </p>
          </>
        ) : (false)
      }

      <br />

      {props.dataProps.province !== '' ? (
        <p>
          <strong>Província: </strong>
          {putDotsOnNumber(props.dataProps.province)}
        </p>
        ) : (false)
      }
    </BodyCard>
  )
}
