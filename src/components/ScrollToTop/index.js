import React from 'react';
import { ExpandLess } from '@material-ui/icons';
import ScrollToTop from './styles';

export default ({loopSizeFromCards}) => {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  if (loopSizeFromCards > 30) {
    return (
      <ScrollToTop>
        <button className="flex-just-alig-center" title="Subir" onClick={scrollToTop}>
          <ExpandLess className="icon"></ExpandLess>
        </button>
      </ScrollToTop>
    );
  } 

  return null;
  
};