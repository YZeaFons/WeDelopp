import style from './PaginateReviews.module.css';
import { useTranslation } from "react-i18next";

const PaginateReviews = ({totalInfo, bringData, dataInit, rating}) => {
  const [t, i18n] = useTranslation("global");

  const handleNext = async() => {
      if(rating === "All") {
        dataInit(totalInfo.nextPage);
      } else {
        bringData(totalInfo.nextPage);
      }
  }

  const handlePrev = async () => {
    if (rating === "All") {
      dataInit(totalInfo.prevPage)
    }
    else {
      bringData(totalInfo.prevPage)
    }
  };

  return (
    <div className={style.container}>
        <button className={totalInfo.hasPrevPage ? style.boton : style.disabled} onClick={handlePrev} disabled={!totalInfo.hasPrevPage}> {t("RatingHome.ReviewsAll.paginatePrev")}</button>
         <span className={style.txtPaginado}>{`${t("RatingHome.ReviewsAll.paginatePage")} ${totalInfo.page} ${t("RatingHome.ReviewsAll.paginateOf")} ${totalInfo.totalPages}`}</span>
        <button className={totalInfo.hasNextPage ? style.boton : style.disabled} onClick={handleNext} disabled={!totalInfo.hasNextPage}>  {t("RatingHome.ReviewsAll.paginateNext")}</button> 
    </div>
  )
}

export default PaginateReviews