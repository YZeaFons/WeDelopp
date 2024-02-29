import style from "./ReviewsAll.module.css";
import { useEffect, useState } from "react";
import reviewsProvider from "../../utils/provider/reviewsProvider/reviewsProvider";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import PaginateReviews from "../../components/paginateReviews/PaginateReviews";
import { useTranslation } from "react-i18next";

export default function ReviewsAll() {
  const [t, i18n] = useTranslation("global");

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState("All");
  const [sortOrder, setSortOrder] = useState('recent');
  const [totalInfo, setTotalInfo] = useState([])


  
  const dataInit = async (page = 1) => {
    try {
      let obj = {
        sortOrder,
        page
      };
      const response = await reviewsProvider.getReviewsAll(obj);
      setReviews(response.docs);
      setTotalInfo(response);
    } catch(error) {
      console.error(error.message);
    }
  }
  
  const bringData = async (page = 1) => {
    try { 
      const ratingNumber = Number(rating);
      let obj = {
        rating: ratingNumber,
        sortOrder,
        page
      };
      const response = await reviewsProvider.getReviewsByRating(obj); 
      setReviews(response.docs);
      setTotalInfo(response);
    } catch(error) {
      console.error(error.message);
    }
  }
  
  useEffect(() => {
    if(rating !== "All") bringData();
    else dataInit();
  }, [rating, sortOrder]);


  const handleRating = (e) => {
      const ratingSelected = e.target.value;
      setRating(ratingSelected);
  }

  const handleSortOrder = (e) => {
    const order = e.target.value;
    setSortOrder(order);
  };


  return(
    <div className={style.container}>

      <div className={style.titulo}>
        <h3>{t("RatingHome.ReviewsAll.title")}</h3>
      </div>

      <div className={style.filtro}>
        <div>
        <label>{t("RatingHome.ReviewsAll.subTitle")}</label>
        <select onChange={handleRating}>
          <option value="All">{t("RatingHome.ReviewsAll.all")}</option>
          <option value="5">{t("RatingHome.ReviewsAll.5stars")}</option>
          <option value="4">{t("RatingHome.ReviewsAll.4stars")}</option>
          <option value="3">{t("RatingHome.ReviewsAll.3stars")}</option>
          <option value="2">{t("RatingHome.ReviewsAll.2stars")}</option>
          <option value="1">{t("RatingHome.ReviewsAll.1star")}</option>
        </select>
        </div>
        <div>
        <label>{t("RatingHome.ReviewsAll.orderBy")}</label>
        <select onChange={handleSortOrder}>
          <option value="recent">{t("RatingHome.ReviewsAll.recent")}</option>
          <option value="oldest">{t("RatingHome.ReviewsAll.oldest")}</option>
        </select>
      </div>
      </div>

      <div className={style.reviewsContainer}>
        { 
        reviews.length ?
        reviews.map((review, index) => <ReviewCard key={index} review={review} />) : 
        <p className={style.notFound}>{t("RatingHome.ReviewsAll.noReviewsStar")}</p> 
        }
      </div>
      
       <PaginateReviews totalInfo={totalInfo} bringData={bringData} dataInit={dataInit} rating={rating}/> 
       
    
      
  </div>
  )
}
