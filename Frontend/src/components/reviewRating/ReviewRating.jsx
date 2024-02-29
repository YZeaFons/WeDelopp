import { GoStarFill } from "react-icons/go";
import style from "./ReviewRating.module.css";
import { useTranslation } from 'react-i18next';

export default function ReviewRating({ totalReviews }) {
  const [t, i18n] = useTranslation("global");

  const sum = totalReviews.reduce((sum, rating) => sum + rating.rating, 0)
  const numReviews = totalReviews.length
  const average = sum / numReviews

  const renderStars = () => {
    const numStars = Math.round(average);
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(<GoStarFill key={i} style={{ color: "gold" }} />);
    }
    return stars;
  };

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <h2 className={style.rating}>{average?.toFixed(1)}</h2>
        <h4>{renderStars()}</h4>
        <p>({t("RatingHome.comments")}: {numReviews})</p>
      </div>
    </div>
  );
};