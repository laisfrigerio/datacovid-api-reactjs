import React from 'react';
import "./WorldCard.css"

export default (props) => {

  function formatDateString(date) {
    let onlyDate = date.slice(0, -17);
    let year = onlyDate.slice(0, -6);
    let month = onlyDate.slice(5, -3);
    let day = onlyDate.slice(8, 10);
    return day + '/' + month + '/' + year;
  }

  function dotsNumber(number) {
    return number !== null
      ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      : '?';
  }

return(
  <div className="card-world">
  <h2>Mundo</h2>
  <p>
    <strong>Casos confirmados: </strong>
    {dotsNumber(props.dataProps.latest.confirmed)}
  </p>
  <p>
    <strong>Mortes:</strong> {dotsNumber(props.dataProps.latest.deaths)}
  </p>
  <p>
    <strong>Última atualização: </strong>
    {formatDateString(props.dataProps.locations[0].last_updated)}
  </p>
</div>
)
}
