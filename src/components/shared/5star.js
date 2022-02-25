import React, { useState } from 'react';
import starBlank from '../../assets/icons/starblank.svg';
import staredGreen from '../../assets/icons/staredGreen.svg';
import staredHalfGreenBlack from '../../assets/icons/staredHalfGreenBlank.svg';

const Star = (props) => {
    const { value } = props;
    return (
        <span>

            {value > 0 ? <span > <img src={staredGreen} /></span> : <span><img src={starBlank} /></span>}{" "}
            {value >= 2 ? <span > <img src={staredGreen} /></span> : value > 1 && value < 2 ? <span > <img src={staredHalfGreenBlack} /></span> : <span><img src={starBlank} /></span>}{" "}
            {value >= 3 ? <span > <img src={staredGreen} /></span> : value > 2 && value < 3 ? <span > <img src={staredHalfGreenBlack} /></span> : <span><img src={starBlank} /></span>}{" "}
            {value >= 4 ? <span > <img src={staredGreen} /></span> : value > 3 && value < 4 ? <span > <img src={staredHalfGreenBlack} /></span> : <span><img src={starBlank} /></span>}{" "}
            {value >= 5 ? <span > <img src={staredGreen} /></span> : value > 4 && value < 5 ? <span > <img src={staredHalfGreenBlack} /></span> : <span><img src={starBlank} /></span>}{" "}
             &nbsp;
        </span>
    );
};

export default Star;
