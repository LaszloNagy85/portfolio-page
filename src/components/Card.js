import React from 'react';

import CardInfo from "./CardInfo";

 function Card(props) {
    return (
        <div className="d-inline-block c-card" onClick={() => props.click()}>
            <img className="c-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected ? <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />
                                  : <div className="c-card-info-placeholder"></div>}
        </div>
    );
}

export default Card;
