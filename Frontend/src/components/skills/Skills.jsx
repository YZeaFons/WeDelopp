import style from "./Skills.module.css";
import { FcConferenceCall } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { useTranslation } from "react-i18next";


const Skills = () => {
  const [t, i18n] = useTranslation("global");

  const skills = ["Creativity", "Experience", "Attention to detail", "Professional", "Original designs", "Efficiency"]

  return (
    <div className={style.containerSkills}>
      <div className={style.containerTitle}>
        <h1 className={style.title}>{t("WhyWedevelop.title")}</h1>
      </div>
      <div className={style.containerCards}>
        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcConferenceCall style={{color : '6940ff'}}/>
          </div>
          <div className={style.titleCard}>
            <h4>{t("WhyWedevelop.section1.title")}</h4>
            <p>{t("WhyWedevelop.section1.description")}</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcIdea />
          </div>
          <div className={style.titleCard}>
          <h4>{t("WhyWedevelop.section2.title")}</h4>
            <p>{t("WhyWedevelop.section2.description")}</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcVoicePresentation/>
          </div>
          <div className={style.titleCard}>
          <h4>{t("WhyWedevelop.section3.title")}</h4>
            <p>{t("WhyWedevelop.section3.description")}</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcApproval />
          </div>
          <div className={style.titleCard}>
          <h4>{t("WhyWedevelop.section4.title")}</h4>
            <p>{t("WhyWedevelop.section4.description")}</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcTemplate />
          </div>
          <div className={style.titleCard}>
          <h4>{t("WhyWedevelop.section5.title")}</h4>
            <p>{t("WhyWedevelop.section5.description")}</p>
          </div>
        </div>

        <div className={style.boxCard}>
          <div className={style.icon}>
            <FcBullish />
          </div>
          <div className={style.titleCard}>
          <h4>{t("WhyWedevelop.section6.title")}</h4>
            <p>{t("WhyWedevelop.section6.description")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills