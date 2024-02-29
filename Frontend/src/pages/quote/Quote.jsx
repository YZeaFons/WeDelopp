import { useEffect, useState } from "react";
import { Section } from "../../components/section/Section";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../../components/navBar/NavBar";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const Quote = () => {
  const user = useSelector(state => state.userData)
  console.log(user)
  const [t, i18n] = useTranslation("global");

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

  const navigate = useNavigate()
  const { isLoading } = useAuth0()

  const [quote, setQuote] = useState({
    purpose: '',
    apiOrDatabase: null,
    amountOfProducts: null,
    extraServices: null,
    legalNorm: null,
    amountOfVisits: null,
    language: null,
    desing: null,
    support: null,
    extraRequeriments: null,
  })

  useEffect(() => {
    if (!user?.email && !isLoading) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: t("NavBar.Quote.alertNotLogged"),
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/");
    }
  }, [user, navigate, isLoading]);


  return (
    <>
      {isMobile ? <NavBar /> : null}
      {
        user?.email
          ? <Section quote={quote} setQuote={setQuote} />
          : null
      }
    </>
  )
}