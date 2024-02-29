import { useTranslation } from 'react-i18next'
import style from './AboutUs.module.css'


const AboutUs = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section className={style.aboutUsContainer} id='#AboutUs'>
      <div className={style.containerimgAndTitle}>
        <div className={style.aboutUsDivImg}>
          <img src='./images/aboutUs.png' alt="AboutUsImg" />
        </div>
        <div className={style.aboutUsDiv}>
          <h3>{t("AboutUs.title")}</h3>
          <p>
          {t("AboutUs.description")}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs