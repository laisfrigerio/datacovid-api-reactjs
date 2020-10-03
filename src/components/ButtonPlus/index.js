import React from 'react';
import { Add } from '@material-ui/icons';
import ButtonPlus from './styles';

export default ({dataFromApi, loopSizeFromCards, onClick}) => {
  return (
    <ButtonPlus className="flex-just-alig-center">
      {loopSizeFromCards < 260 && dataFromApi !== false ? (
        <button className="flex-just-alig-center" title="Ver mais" onClick={onClick}>
          <Add></Add>
        </button>
      ) : (
        null
      )}
    </ButtonPlus>
  );
};