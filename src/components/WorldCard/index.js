import React from 'react';
import { Public } from '@material-ui/icons';
import Card from './styles';

export default ({dataProps}) => {
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
    <Card>
      <div className="world-and-icon">
        <h2>COVID-19 no Mundo</h2> <Public className="icon"></Public>
      </div>
      <p>
        <strong>Casos confirmados: </strong>
        {putDotsOnNumber(dataProps.latest.confirmed)}
      </p>
      <p>
        <strong>Mortes:</strong> {putDotsOnNumber(dataProps.latest.deaths)}
      </p>
      <p>
        <strong>Última atualização: </strong>
        {formatDateString(dataProps.locations[0].last_updated)}
      </p>
    </Card>
  );
};
