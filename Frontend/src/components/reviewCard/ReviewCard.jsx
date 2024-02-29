import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { GoStarFill } from "react-icons/go";
import style from "./ReviewCard.module.css";

export default function ReviewCard({ review }) {

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(review.rating);
    const hasHalfStar = review.rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<GoStarFill key={i} color="gold" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" color="gold" />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<GoStarFill key={`empty-${i}`} color="lightgrey" />);
    }
    return stars;
  };

  return (
    <div className={style.container}>
      <div className={style.firstRow}>
        <div className={style.image}>
          <img src={review.image} />
        </div>
          <div className={style.containerNameAndDate}>
            <h4 className={style.name}>{review.name}</h4>
            <p className={style.fecha}>{review.date}</p>
          </div>
          <div className={style.containerStarts}>
            <p>{renderStars()}</p>
          </div>
      </div>
      <div className={style.containerComment}>
      <p className={style.message}>{review.message}</p>
      </div>
    </div>
  );
};
