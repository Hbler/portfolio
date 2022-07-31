import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Trans, useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  interface Langs {
    en: { nativeName: string };
    pt: { nativeName: string };
  }

  type L = keyof Langs;

  const lngs: Langs = {
    en: { nativeName: "English" },
    pt: { nativeName: "Português" },
  };
  return (
    <Suspense fallback="loading">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{t("Welcome to React")}</h1>
          <div>
            {Object.keys(lngs).map((lng) => (
              <button
                key={lng}
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
                }}
                type="submit"
                onClick={() => i18n.changeLanguage(lng)}
              >
                {lngs[lng as L].nativeName}
              </button>
            ))}
          </div>
          <p>
            <Trans i18nKey="description.part1">
              Edit <code>src/App.tsx</code> and save to reload.
            </Trans>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("menu.talk")}
          </a>
        </header>
      </div>
    </Suspense>
  );
}

export default App;
