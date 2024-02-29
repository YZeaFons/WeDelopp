import { Link } from 'react-router-dom'
import style from './StartQuote.module.css'
import { useTranslation } from 'react-i18next';
const StartQuote = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div className={style.quoteContainer}>
        <div className={style.containerTitle}>
          <h2 className={style.quoteStartProyect}>{t("QuoteHome.title")}</h2>
        </div>
        <div className={style.containerButton}>
          <button className={style.quoteButton}><Link to={"/quote"}>{t("QuoteHome.button")}</Link></button>
        </div>
      </div>
    </>
  )
}

export default StartQuote