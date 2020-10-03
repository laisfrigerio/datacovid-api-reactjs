import React from 'react';
import { ExpandLess } from '@material-ui/icons';
import ScrollToTop from './styles';

export default ({onClick}) => {

  return (
    <ScrollToTop>
      <button className="flex-just-alig-center" title="Subir" onClick={onClick}>
        <ExpandLess className="icon"></ExpandLess>
      </button>
    </ScrollToTop>
  );
};