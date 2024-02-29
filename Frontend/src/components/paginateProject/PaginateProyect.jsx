import React from 'react'
import projectsProvider from '../../utils/provider/projectsProvider/projectsProvider'
import style from './PaginateProyect.module.css'
import { useTranslation } from 'react-i18next';

const PaginateProyect = ({ totalInfo, selectedOptions, dataInit, bringData }) => {
  const [t, i18n] = useTranslation("global");


  const handleNext = async () => {
    if (!selectedOptions.length) {
      dataInit(totalInfo.nextPage)
    }
    else {
      bringData(totalInfo.nextPage)
    }
  };

  const handlePrev = async () => {
    if (!selectedOptions.length) {
      dataInit(totalInfo.prevPage)
    }
    else {
      bringData(totalInfo.prevPage)
    }
  };

  return (
    <div>
      {
        totalInfo.hasPrevPage ? <button className={style.Buttons} onClick={handlePrev}>{t("Projects.paginate.prev")}</button> : null
      }
      {
        totalInfo.hasNextPage ? <button className={style.Buttons} onClick={handleNext}>{t("Projects.paginate.next")}</button> : null
      }
    </div>
  )
}

export default PaginateProyect