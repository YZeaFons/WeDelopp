import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import global_es from "./i18n/es/global.json";
import global_en from "./i18n/en/global.json";
import global_fr from "./i18n/fr/global.json";

const storedLanguage = localStorage.getItem("language") || "en";

i18next.init({
  interpolation: { escapeValue: false },
  lng: storedLanguage,
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
    fr: {
      global: global_fr,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-zy68xm5sl5mhrgw3.us.auth0.com"
        clientId="rH6qLmDrP51hwYBROC1JUlmZy5HbPkwl"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </Auth0Provider>
    </BrowserRouter>
  </Provider>
);
