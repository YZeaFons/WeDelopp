import style from "./Header.module.css";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  // const [wordIndex, setWordIndex] = useState(0);
  // const [words, setWords] = useState([]);

  // const fetchTranslatedWords = () => {
  //   const translatedWords = [
  //     t("Header.change.word1"),
  //     t("Header.change.word2"),
  //     t("Header.change.word3"),
  //     t("Header.change.word4"),
  //   ];
  //   setWords(translatedWords);
  //   setWordIndex(Math.floor(Math.random() * translatedWords.length));
  // };

  // useEffect(() => {
  //   fetchTranslatedWords();

  //   const interval = setInterval(() => {
  //     setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [t]);

  return (
    <div className={style.HeaderContainer}>
      <div className={style.titleContainer}>
        <h1 className={style.h1}>
          {t("Header.title")}{" "}
          {/* <span>{words.length > 0 && t(`${words[wordIndex]}`)}</span> */}
        </h1>

        <img src="./images/logo-header.png" alt="" />
      </div>
      <div className={style.ImgContainer}>
        <img
          className={style.imgResponsive}
          src="./images/responsive.png"
          alt="resposive"
        />
      </div>
      <div className={style.customshapedividerbottom1707406615}>
        <svg
          className={style.svg}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={style.shapefill}
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
