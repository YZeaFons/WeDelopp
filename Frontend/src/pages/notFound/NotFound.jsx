import React from 'react'
import style from './NotFound.module.css'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const [t, i18n] = useTranslation("global");

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/quote');
      };

    return (
        <div className={style.notFound}>
        
        <div className={style.img}>
            <img src= "./images/404NotFound.png" />
        </div>
        
        <h1>{t("NotFoundPage.part1")}</h1>
        <p>
        {t("NotFoundPage.part2")}
        <br />
        {t("NotFoundPage.part3")}
        <br />
        {t("NotFoundPage.part4")}
        <br />
        {t("NotFoundPage.part5")}
        <br />
        {t("NotFoundPage.part6")}
        <br />
        <br />
        {t("NotFoundPage.part7")}
      </p>
      <br />
      <button className={style.button} onClick={handleClick}>{t("NotFoundPage.button")}</button>
        </div>
    )
}

export default NotFound