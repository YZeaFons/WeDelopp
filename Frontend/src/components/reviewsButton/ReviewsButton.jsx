import { Link } from "react-router-dom";
import style from "./ReviewsButton.module.css";
import { useTranslation } from "react-i18next";



export default function ReviewsButton() {
    const [t, i18n] = useTranslation("global");
    return(
     <div className={style.container}>
        <Link to="/reviews">
            <button className={style.boton}>{t("RatingHome.viewAll")}</button>
       </Link>
     </div>
    )
}