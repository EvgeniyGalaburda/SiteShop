import React from 'react'

import style from '../styles/StarRating.module.css'

const StarRating = ({ rate }) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
        const starPercentage = Math.min(Math.max(rate - index, 0), 1) * 100;
        return (
            <span key={index} className={style.star}>
                <span className={style.starFilled} style={{ width: `${starPercentage}%` }}>★</span>
                ★
            </span>
        );
    });

    return <div className={style.starRating}>{stars}</div>;
};


export default StarRating