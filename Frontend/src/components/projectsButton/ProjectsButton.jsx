import { Link } from "react-router-dom";
import style from "./ProjectsButton.module.css";
import { useTranslation } from "react-i18next";



export default function ProyectsButton() {
    const [t, i18n] = useTranslation("global");
    return(
     <div className={style.container}>
        <Link to="/projects">
            <button className={style.boton}>{t("Highlights.ProjectsButton")}</button>
       </Link>
     </div>
      
    
    )
}