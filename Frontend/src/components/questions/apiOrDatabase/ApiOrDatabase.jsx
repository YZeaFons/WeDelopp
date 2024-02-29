import React, { useState } from 'react'
import style from "./ApiOrDatabase.module.css"
import { useTranslation } from "react-i18next";

export const ApiOrDatabase = ({ quote, setQuote, question, setQuestion, setProgressBar, progressBar }) => {
  const [t, i18n] = useTranslation("global");

  const [apiOrDatabase, setApiOrDatabase] = useState("")
  const [positiveAnswer, setPosAnswer] = useState(false)


  const handleChange = (event) => {
    setApiOrDatabase(event.target.value)
  }

  const handleClick = (e) => {
    const valueClick = e.target.value
    if (valueClick === 'Yes') setPosAnswer(true)
    else {
      setQuote({
        ...quote,
        'apiOrDatabase': valueClick
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
      'apiOrDatabase': apiOrDatabase
    })
    if (quote.extraRequeriments == null) {
      setProgressBar(progressBar + 10)
      setQuestion(question + 1)
    }
    else setQuestion(11)
  }


  return (
    <div className={style.containerApiOrDatabase}>
      <div className={style.titleCuestion}>
        <h3>{t("QuoteQuestions.Section2.title")}</h3>
      </div>
      <div className={style.apiOrDatabaseContainer} >
        <div className={style.ApiOrDatabaseOpcionOne} style={positiveAnswer ? { display: 'none' } : { display: '' }}>
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
          <div className={style.ApiOrDatabaseOpcionTwo}>
            <input
              value={apiOrDatabase}
              type='text'
              placeholder={t("QuoteQuestions.Section2.input")}
              onChange={handleChange}
              className={style.ApiOrDatabaseInput}
            ></input>
            <div className={style.buttonsTwo}>
            <button
              className={style.ApiOrDatabaseUpload}
              onClick={handleClickContinue}
            >{t("QuoteQuestions.Section2.save")}</button>
            <button
              className={style.ApiOrDatabaseUpload}
              onClick={() => setPosAnswer(false)}
            >Cancelar</button>
            </div>
           
          </div>
        ) : (<></>)}
      </div>
    </div>
  );
}
