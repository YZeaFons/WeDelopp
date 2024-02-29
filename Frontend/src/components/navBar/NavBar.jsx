import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import React, { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import LoginButton from "../loginButton/LoginButton";
import { FiMenu } from 'react-icons/fi';
import { UserAccountMobile } from "../userAccountMobile/UserAccountMobile";
import logoNav from '../../../public/images/logo-nav.png'
import { useSelector } from "react-redux";



const NavBar = ({ setLocalData }) => {

  const data = useSelector(state => state.userData);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 680);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 680);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18next.changeLanguage(lang);
    localStorage.setItem('language', lang);

  };
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    const handleFocusChange = (event) => {
      if (
        event.target !== document.querySelector(".dropdown-content") &&
        isDropdownOpen
      ) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("focus", handleFocusChange);

    return () => {
      window.removeEventListener("focus", handleFocusChange);
    };
  }, [isDropdownOpen]);

  const [isVisible, setIsVisible] = useState(false);

  const handleShowMenu = () => {
    setIsVisible(!isVisible);
  }

  const ocultarMenu = () => {
    const menu = document.querySelector(`.${style.menu}`);
    menu.style.left = "-800px";
  }

  return (
    <div className={style.NavBarContainer}>
      <Link to="/" className={style.Link}>
        <div className={style.logo}>
          <img src={logoNav} />
        </div>
      </Link>
      <div className={style.menu} onClick={ocultarMenu} style={isVisible ? { left: '0' } : { left: '-800px' }}>
        <nav>
          <ul>
            <li>
              <Link to="/">{t("NavBar.Home")}</Link>
            </li>
            <li>
              <Link to="/quote">{t("NavBar.Quote.title")}</Link>
            </li>
            <li>
              <Link to="/projects">{t("NavBar.Projects")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("NavBar.ContactUs")}</Link>
            </li>
            <li className={style.dropdown} onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
              <span>
                {t("NavBar.Language")}
                {isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </span>
              {isDropdownOpen && (
                <ul className={style.dropdownContent}>
                  <li>
                    <button onClick={() => handleChangeLanguage("es")}> <TfiWorld />Español</button>
                    <button onClick={() => handleChangeLanguage("en")}> <TfiWorld />English</button>
                    <button onClick={() => handleChangeLanguage("fr")}> <TfiWorld />Français</button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <div className={style.login} style={data?.name && isMobile ? { display: 'none' } : { display: '' }}>
          <LoginButton setLocalData={setLocalData} />
        </div>
        {data?.name ? <UserAccountMobile /> : null}
      </div>
      <div className={style.hamburgContainer}>
        <button className={style.menuButton} onClick={handleShowMenu}><FiMenu /></button>
      </div>
    </div>
  );
};

export default NavBar;
