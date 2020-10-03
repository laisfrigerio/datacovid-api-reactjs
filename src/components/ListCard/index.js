import React from 'react';
import Section from './styles';
import ButtonPlus from '../ButtonPlus';

export default ({dataFromApi, focusElement, generateCardDivs, loopSizeFromCards, onClick}) => {
    return (
        <Section ref={focusElement} tabIndex="0" className="all-cards flex-just-center">
            {generateCardDivs() /* Todos os Cards */}
            <ButtonPlus dataFromApi={dataFromApi} loopSizeFromCards={loopSizeFromCards} onClick={onClick} />
        </Section>
    );
}