import React, { useState } from 'react';
import style from './Support.module.css'
import YesSuppor from './SupportWebYes.png';
import NoSupport from './SupportWebNo.png';
import { FcCancel } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { useTranslation } from 'react-i18next';

export const Support = ({ quote, setQuote, question, setQuestion, progressBar, setProgressBar }) => {

  const [t, i18n] = useTranslation("global");

  const [showOptions, setShowOptions] = useState(false);
  const [selectedSupport, setSelectedSupport] = useState(null);
  const handleYesClick = () => {
    setShowOptions(true);
  };


  const handleClick = (e) => {
    const valueClick = e.currentTarget.getAttribute('value');
    setSelectedSupport(valueClick);
    setQuote({
      ...quote,
      'support': valueClick
    });
    setShowOptions(false);
    if (quote.extraRequeriments == null) {
      setProgressBar(progressBar + 10)
      setQuestion(question + 1)
    }
    else setQuestion(11)

  };

  return (
    <div className={style.containerSupport}>
      <div className={style.titleCuestion}>
        <h3>{t("QuoteQuestions.Section9.title")}</h3>
      </div>

      <div className={style.containerImages} style={showOptions ? { display: 'none' } : { display: '' }}>
        <div className={style.imageContainer} onClick={handleYesClick}>
          <img src={YesSuppor} alt="servicios" className={style.image} />
          <div className={style.containerIcon}>
            <FcOk className={style.smallImage} />
          </div>
          <div className={style.title}>
            <h4>{t("QuoteQuestions.Section9.answer1.title")}</h4>
          </div>
        </div>

        <div className={style.imageContainer} onClick={handleClick} value='No'>
          <img src={NoSupport} alt="Services" className={style.image} />
          <div className={style.containerIcon}>
            <FcCancel className={style.smallImage} />
          </div>
          <div className={style.title}>
            <h4>{t("QuoteQuestions.Section9.answer2")}</h4>
          </div>
        </div>
      </div>
      {showOptions && (
        <div className={style.containerOptions}>
          <div className={style['options-list']}>
            <button className={style['option-item']} onClick={handleClick} value='Weekly'>{t("QuoteQuestions.Section9.answer1.op1")}</button>
            <button className={style['option-item']} onClick={handleClick} value='Monthly'>{t("QuoteQuestions.Section9.answer1.op2")}</button>
            <button className={style['option-item']} onClick={handleClick} value='Quarterly'>{t("QuoteQuestions.Section9.answer1.op3")}</button>
            <button className={style['option-item']} onClick={handleClick} value='Others'>{t("QuoteQuestions.Section9.answer1.op4")}</button>
            <button onClick={() => setShowOptions(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};