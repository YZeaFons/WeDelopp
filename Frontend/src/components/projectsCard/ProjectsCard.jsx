import { Link } from "react-router-dom";
import style from "./ProjectsCard.module.css";
import { useTranslation } from "react-i18next";


export default function ProjectsCard({ project}) {
    const [t, i18n] = useTranslation("global");
    const translatedCategory = t(`Projects.projectsSelect.categories.${project.category}`);

    return (

        <Link to={`/projects/${project._id}`} className={style.link}>
            <div className={style.container}>
                <img src={project.images} className={style.img} />
                <div className={style.containerTitle}>
                    <h2>{project.name}</h2>
                    <h5> {t("Projects.cards")} {translatedCategory}</h5>
                </div>
            </div>
        </Link>

    )
}