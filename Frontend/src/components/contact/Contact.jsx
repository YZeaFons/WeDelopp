import React, { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import style from "./Contact.module.css";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t, i18n] = useTranslation("global");
  const [state, handleSubmit] = useForm("xrgnqgnz");
  const formRef = useRef(null); 

  const handleFormSubmit = async (event) => {
    await handleSubmit(event);
    if (state.succeeded) {
      Swal.fire({
        title: t("ContactUsPage.alert.title"),
        text: t("ContactUsPage.alert.description"),
        icon: "success"
      });
      formRef.current.reset(); 
    }
  };

  return (
    <div className={style.containerContactUs}>
      <div className={style.flyerWebDevelop}>
        <div className={style.containerImage}>
          <img src="./images/logo-nav.png" alt="" />
          <span>{t("ContactUsPage.bydevelopers")}</span>
        </div>
      </div>
      <form ref={formRef} onSubmit={handleFormSubmit} className={style.form}>
        <div className={style.titleProject}>
          <h3>{t("ContactUsPage.title")}</h3>
        </div>
        <label htmlFor="name">{t("ContactUsPage.name")}</label>
        <input id="name" type="text" name="name" />
        <ValidationError prefix="Name" field="text" errors={state.errors} />

        <label htmlFor="email">{t("ContactUsPage.email")}</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder={t("ContactUsPage.description")}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <div className={style.containerButton}>
          <button type="submit" disabled={state.submitting}>
            {t("ContactUsPage.submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;