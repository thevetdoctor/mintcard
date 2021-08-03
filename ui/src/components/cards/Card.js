import React, { Fragment } from 'react';
import './card.css';

export default function Card({src, tag, flipState, onClick}) {

    return (
        <Fragment>
            {/* <span className='card-span'> */}
                <img
                    className={`card ${flipState && 'filtered'}`}
                    src={src}
                    alt={tag}
                    onClick={onClick}
                />
                {/* <div className='overlay'></div> */}
            {/* </span> */}
        </Fragment>
    )
}
