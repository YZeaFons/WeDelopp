import React from 'react'
import style from './Purpose.module.css'
import { useTranslation } from 'react-i18next';

export const Purpose = ({ quote, setQuote, question, setQuestion, setProgressBar, progressBar }) => {
  const [t, i18n] = useTranslation("global");

  const handleClick = (e) => {

    const valueClick = e.target.value
    setQuote({
      ...quote,
      'purpose': valueClick
    })
    if (valueClick === 'web') {
      if (quote.extraRequeriments == null) {
        setProgressBar(progressBar + 20)
        setQuestion(question + 1)
      }
      else {
        setQuote({
          ...quote,
          'amountOfProducts': null,
          'purpose': valueClick
        })
        setQuestion(11)
      }
    } else {

      if (quote.extraRequeriments == null) {
        setProgressBar(progressBar + 10)
        setQuestion(question + 1)
      }
      else setQuestion(11)

    }
  }

  return (
    <div className={style.containerPurpose}>
      <div className={style.titleCuestion}>
        <h3>{t("QuoteQuestions.Section1")}</h3>
      </div>
      <div className={style.containerButtons}>
        <button
          className={style.button}
          value="ecommerce"
          onClick={handleClick}
        >E-commerce</button>
        <button
          className={style.button}
          value="web"
          onClick={handleClick}
        >Web</button>
      </div>
    </div>
  );
}
