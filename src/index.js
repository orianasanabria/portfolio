import React from "react"
import i18next from "i18next"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { GlobalProvider } from "./context/globalContext"
import { I18nextProvider } from "react-i18next"
import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: localStorage.getItem("lang") || "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
})
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </GlobalProvider>
  </React.StrictMode>
)
