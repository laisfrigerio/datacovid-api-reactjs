import React from 'react';
import './WorldCard.css';
import { Public } from '@material-ui/icons';

export default (props) => {
  function formatDateString(date) {
    let onlyDate = date.slice(0, -17);
    let year = onlyDate.slice(0, -6);
    let month = onlyDate.slice(5, -3);
    let day = onlyDate.slice(8, 10);
    return day + '/' + month + '/' + year;
  }

  function putDotsOnNumber(number) {
    return number !== null? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'): '?';
  }

  return (
    <div className="card-world">
      <div className="world-and-icon">
        <h2>COVID-19 no Mundo</h2> <Public className="icon"></Public>
      </div>
      <p>
        <strong>Casos confirmados: </strong>
        {putDotsOnNumber(props.dataProps.latest.confirmed)}
      </p>
      <p>
        <strong>Mortes:</strong> {putDotsOnNumber(props.dataProps.latest.deaths)}
      </p>
      <p>
        <strong>Última atualização: </strong>
        {formatDateString(props.dataProps.locations[0].last_updated)}
      </p>
    </div>
  );
};
