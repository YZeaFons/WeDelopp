import ReviewForm from "../reviewForm/ReviewForm";
import ReviewCard from "../reviewCard/ReviewCard";
import style from "./Review.module.css";
import ReviewRating from "../reviewRating/ReviewRating";
import ReviewBar from "../reviewBar/ReviewBar";
import { useTranslation } from "react-i18next";
import ReviewsButton from "../reviewsButton/ReviewsButton";
import preferenceProvider from "../../utils/provider/preferenceProvider/preferenceProvider";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Review({ totalReviews, messages }) {
  const [t, i18n] = useTranslation("global");
  const [userPreference, setUserPreference] = useState({});
  const user = useSelector(state => state.userData);

  const userHasPreference = async () => {
    const preference = await preferenceProvider.getPreferenceByEmail(user?.email);
    setUserPreference(preference);
  }

  useEffect(() => {
    userHasPreference()
  }, []);

  return (
    <div className={style.container}>
      <div className={style.reviewRatingAndContainer}>
        <ReviewRating totalReviews={totalReviews} />
        <ReviewBar reviews={totalReviews}/>
      </div>
      <div className={style.cardContainer}>
        {messages?.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <div>
        <ReviewsButton />
      </div>

      { userPreference?.email ? (
        <div className={style.containerTitle}>
          <ReviewForm />
        </div>
      ) : (
        <div className={style.H3andButton}>
            <h3>{t("RatingHome.NotBuyer")} </h3>
        </div>
      )}
    </div>
  );
}
