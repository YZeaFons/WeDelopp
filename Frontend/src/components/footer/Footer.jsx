import style from './Footer.module.css'
import { Link } from 'react-router-dom'
import { MdFacebook } from "react-icons/md";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          subject: 'Subject of email',
          html: 'HTML content of email',
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className={style.containerFooter}>
      <div className={style.footer}>
        <div className={style.footerSocial}>
          <img src="./images/logo-nav.png" alt="" />
          <span>{t("Footer.bydeveloper")}</span>
          <div className={style.socials}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><MdFacebook /></a>
            <Link to={"/"}><TiSocialLinkedinCircular /></Link>
            <Link to={"/"}><AiFillTwitterCircle /></Link>
            <a href="https://github.com/Freetzen/WeDevelop" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>

        <div className={style.footerNavigation}>
          <h4>{t("Footer.Navigation.title")}</h4>
          <div className={style.link}>
          <a href="#" onClick={() => window.scrollTo(0, 0)}>{t("Footer.Navigation.Home")}</a>
            <Link to={"/quote"}>{t("Footer.Navigation.Quote")}</Link>
            <Link to={"/projects"}>{t("Footer.Navigation.Projects")}</Link>
            <Link to={"/contact"}>{t("Footer.Navigation.ContactUs")}</Link>
          </div>
        </div>

        <div className={style.footerContact}>
          <h4>{t("Footer.ContactUs")}</h4>
          <div className={style.contact}>
            <p><IoLocationSharp className={style.icon} />Colombia-Argentina</p>
            <p><MdOutlineAlternateEmail className={style.icon} />Contactwedevelop@gmail.com</p>
            <p><FaPhoneAlt className={style.icon} />+54 9 3543 579562</p>
          </div>
        </div>

        <div className={style.footerNewLetter}>
          <div className={style.input}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="">{t("Footer.Newsletter.title")}</label>
              <input
                type="email"
                placeholder={t("Footer.Newsletter.placeholder")}
                value={email}
                onChange={handleEmailChange}
              />
              <button type="submit">{t("Footer.Newsletter.button")}</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>

      </div>
      <footer>{t("Footer.Copyright")}</footer>
    </div>
  )
}

export default Footer
