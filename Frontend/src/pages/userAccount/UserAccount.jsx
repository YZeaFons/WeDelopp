import { useAuth0 } from "@auth0/auth0-react"
import style from "./UserAccount.module.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userProvider from "../../utils/provider/userProvider/userProvider";
import { useTranslation } from "react-i18next";
import { clearLocalStorage } from "../../helpers/local";
import { useSelector } from "react-redux";


export const UserAccount = ({ menuIsActive }) => {
  const data = useSelector(state => state.userData)
  const [t, i18n] = useTranslation("global");
  const { logout } = useAuth0()
  let fecha = data.createdAt?.split("")
  let res = fecha?.slice(0, 10)
  const handleLogut = () => {
    logout()
    clearLocalStorage()
  }


  return (
    <div className={style.infoContainer} style={menuIsActive ? { left: '-20%' } : { left: '0%' }}>
      <div className={style.imgAndNameContainer}>
        <img src={data?.image}></img>
        <h2>{data?.name}</h2>
        <p>{data?.email}</p>
      </div>
      <div className={style.planAndMembershipContainer}>

        {
          data?.role === "admin" ? (
            <>
              <label >{t("UserAccount.role")}</label>
              <p>{data?.role}</p>
            </>
          )
            : null
        }
        <label >{t("UserAccount.creationDate")}</label>
        <p> {res}</p>
        {
          data?.preference ? (
            <>
              <label >{t("Contrated Plan")}</label>
              <p>{data.preference.title}</p>
              <label >{t("Purpose of your project")}</label>
              <p>{data?.preference?.quote?.purpose}</p>
            </>
          ) : null
        }
      </div>
      <div className={style.buttonsContainer}>
        <button onClick={handleLogut}>{t("UserAccount.SignOut")}</button>
        <div>
          {
            data && data?.role === 'admin' ? (
              <Link to={'/admin'}>
                <button>{t("UserAccount.adminPanel")}</button>
              </Link>
            ) : null
          }
        </div>
      </div>
    </div>
  )
}