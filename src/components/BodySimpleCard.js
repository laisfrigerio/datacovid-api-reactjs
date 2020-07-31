import React from 'react';

export default (props) => {

  function dotsNumber(number) {
    // Adicionar pontos aos números
    return number !== null
      ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      : '?';
  }

return(

<div className="body-card">
<p>
  <strong>Casos: </strong>
  {dotsNumber(props.dataProps.latest.confirmed)}
</p>
<br />
<p>
  <strong>Mortes: </strong> {dotsNumber(props.dataProps.latest.deaths)}
</p>
{props.dataProps.province === '' ? (
  <>
    <br />
    <p>
      <strong>População: </strong>
      {dotsNumber(props.dataProps.country_population)}
    </p>
  </>
) : (
  false
)}
<br />
{props.dataProps.province !== '' ? (
  <p>
    <strong>Província: </strong>
    {dotsNumber(props.dataProps.province)}
  </p>
) : (
  false
)}
</div>
)
}
