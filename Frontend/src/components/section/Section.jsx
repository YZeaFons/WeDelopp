import React, { useEffect, useState } from 'react'
import style from './Section.module.css'
import { Support } from '../questions/support/Support'
import { AmountVisites } from '../questions/amountVisites/AmountVisites'
import { Purpose } from '../questions/purpose/Purpose'
import { ExtraServices } from '../questions/extraServices/ExtraServices'
import { ExtraRequeriments } from '../questions/extraRequeriments/ExtraRequeriments'
import { Desing } from '../questions/desing/Desing'
import { ApiOrDatabase } from '../questions/apiOrDatabase/ApiOrDatabase'
import { AmountOfProducts } from '../questions/amountOfProducts/AmountOfProducts'
import { LegalNorm } from '../questions/legalNorm/LegalNorm'
import { Language } from '../questions/language/Language'
import { ResumeQuestions } from '../resumeQuestions/ResumeQuestions'
import BarProgress from './barProgress/BarProgress'
import Pricing from '../pricing/pricing/Pricing'
import SpinnerResumen from '../spinners/spinnerResumen/SpinnerResumen'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom'
import planProvider from '../../utils/provider/planProvider/planProvider'



export const Section = ({ quote, setQuote }) => {
  const [question, setQuestion] = useState(1)
  const [progressBar, setProgressBar] = useState(0)
  const [plan, setPlan] = useState([])
  const [loading, setLoading] = useState(false)
  const [showPrevious, setShowPrevious] = useState(false);
  const [showNext, setShowNext] = useState(true);

  useEffect(() => {
    setLoading(!loading);

    setShowPrevious(question > 1 ? true : false);

    setShowNext(question < 12 ? true : false);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [progressBar, question]);

  const handlePrevious = () => {
    setQuestion(question - 1);
  };

  const handleNext = () => {
    setQuestion(question + 1);
  };

  useEffect(() => {
    const planSearch = async () => {
      let web = {
          type: 'Web'
      }

      let ECommerce = {
          type: 'E-commerce'
      }
      
      if(quote.purpose === 'web'){
          const planWeb = await planProvider.getPlanByType(web)
          setPlan(planWeb)
          return planWeb
      }
      if(quote.purpose === 'ecommerce'){
          const planECommerce = await planProvider.getPlanByType(ECommerce)
          setPlan(planECommerce)
          return planECommerce
      }
    }

    planSearch()

  }, [quote])

  const switchQuestion = (question) => {

    switch (question) {
      case 1:
        return <Purpose progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />;
      case 2:
        return <ApiOrDatabase progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 3:
        if (quote.purpose === "ecommerce") {
          return <AmountOfProducts progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
        } else {
          setQuestion(question + 1)
        }
      case 4:
        return <ExtraServices progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 5:
        return <LegalNorm progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 6:
        return <AmountVisites progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />;
      case 7:
        return <Language progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 8:
        return <Desing progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 9:
        return <Support progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 10:
        return <ExtraRequeriments progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 11:
        return <ResumeQuestions progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} setQuote={setQuote} setQuestion={setQuestion} question={question} />
      case 12:
        return <Pricing progressBar={progressBar} setProgressBar={setProgressBar} quote={quote} plan={plan}/>
      default:
        return <></>

    }
  }


  return (
    <div className={style.containerSection}>
      <div className={style.container}>
        <div className={style.ContainerQuestions}>
          <div className={style.containerImg}>
            <Link to='/'> <img src='./images/LogoResumen.png' alt="" /> </Link>
            {
              question === 12
              ? null
              :
              <div className={style.containerButtons}>
              <button onClick={handlePrevious}
                title='Previous'
                disabled={!showPrevious}
                style={!showPrevious ? { color: 'rgba(240, 248, 255, 0.555)' } : { color: 'aliceblue' }}>
                <IoIosArrowDropleftCircle />
              </button>
              {
                question === 11
                ? null
                :
                <button onClick={handleNext}
                title='Next'
                disabled={!showNext}
                style={!showNext ? { color: 'rgba(240, 248, 255, 0.555)' } : { color: 'aliceblue' }}>
                <IoIosArrowDroprightCircle />
              </button>
              }
            </div>
            }
          </div>
        </div>
        <div className={style.containerQuoteAndBar}>
          <div className={style.containerBar}>
            <BarProgress progressBar={progressBar} />
          </div>
          <div className={style.containerQuote}>
            {loading ? <SpinnerResumen /> : switchQuestion(question)}
          </div>
        </div>
      </div>
    </div>
  )
}
