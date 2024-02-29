import React, { useState } from 'react'
import style from "./ExtraRequeriments.module.css"
import { useTranslation } from 'react-i18next';

export const ExtraRequeriments = ({ quote, setQuote, question, setQuestion, progressBar, setProgressBar }) => {
  const [t, i18n] = useTranslation("global");

  const [requeriment, setRequeriment] = useState('')
  const [positiveAnswer, setPosAnswer] = useState(false)

  const handleChange = (event) => {
    setRequeriment(event.target.value)
  }


  const handleClick = (e) => {
    const valueClick = e.target.value
    if (valueClick === 'Yes') setPosAnswer(true)
    else {
      setQuote({
        ...quote,
        'extraRequeriments': valueClick
      })
      if (quote.extraRequeriments == null) {
        setProgressBar(progressBar + 10)
        setQuestion(question + 1)
      }
      else setQuestion(11)
    }
  }

  const handleClickContinue = (e) => {
    e.preventDefault()
    setQuote({
      ...quote,
      'extraRequeriments': requeriment
    })
    if (quote.extraRequeriments == null) {
      setProgressBar(progressBar + 10)
      setQuestion(question + 1)
    }
    else setQuestion(11)
  }


  return (
    <div className={style.containerExtraRequeriments}>
      <div className={style.titleCuestion}>
        <h3>{t("QuoteQuestions.Section10.title")}</h3>
      </div>
      <div className={style.ExtraRequerimentsContainer}>
        <div className={style.ExtraRequerimentsOpcionOne} style={positiveAnswer ? { display: 'none' } : { display: '' }}>
          <button
            className={style.button}
            value="Yes"
            onClick={handleClick}
          >Yes</button>
          <button
            className={style.button}
            value="No"
            onClick={handleClick}
          >No</button>
        </div>
        {positiveAnswer ? (
          <div className={style.ExtraRequerimentsTwo}>
            <textarea
              placeholder={t("QuoteQuestions.Section10.input")}
              value={requeriment}
              type='text'
              onChange={handleChange}
              className={style.ExtraRequerimentsTextArea}
            ></textarea>
            <div className={style.coontainerButton}>
              <button
                className={style.ExtraRequerimentsUpload}
                onClick={handleClickContinue}
              >{t("QuoteQuestions.Section10.continue")}</button>
              <button
                onClick={() => setPosAnswer(false)}
              >Cancel</button>
            </div>
          </div>
        ) : (<></>)}
      </div>
    </div>
  );
}
