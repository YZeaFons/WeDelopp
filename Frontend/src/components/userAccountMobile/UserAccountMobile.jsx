import { useAuth0 } from "@auth0/auth0-react"
import style from "./UserAccountMobile.module.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userProvider from "../../utils/provider/userProvider/userProvider";
import { useTranslation } from "react-i18next";
import { clearLocalStorage } from "../../helpers/local";
import { useSelector } from "react-redux";


export const UserAccountMobile = () => {
  const [t, i18n] = useTranslation("global");
  const { logout } = useAuth0()
  const data = useSelector(state => state.userData)
  let fecha = data.createdAt.split("")
  let res = fecha.slice(0, 10)

  const handleLogut = () => {
    logout()
    clearLocalStorage()
  }

  return (
    <div className={style.infoContainer}>
      <div className={style.imgAndNameContainer}>
        <div className={style.imgAndName}>
          <img src={data?.picture}></img>
          <h2>{data?.name}</h2>
        </div>
        <p>{data?.email}</p>
      </div>
      <div className={style.planAndMembershipContainer}>
        <label >{t("UserAccount.Membership")}</label>
        <p>Premium</p>
        <label >{t("UserAccount.creationDate")}</label>
        <p> {res}</p>
      </div>
      <div className={style.buttonsContainer}>
        <button onClick={handleLogut}>{t("UserAccount.SignOut")}</button>
        <div>
        {
  data && data.role === 'admin' ? (
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