import React, { useState } from "react";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import css from "./styles/App.module.scss";
import { IntlProvider, FormattedMessage } from "react-intl";
import messages from "./components/message";
const App = () => {
  //don't forget to add font link in index.html

  const [locale, setLocale] = useState("uz");

  function handleLocaleChange() {
    const newLocale = locale === "uz" ? "en" : "uz";
    setLocale(newLocale);
  }

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className={`bg-primary ${css.container}`}>
        <Header handleLocaleChange={handleLocaleChange} />
        <Hero />
        <Experties locale={locale} />
        <Portfolio locale={locale} />
        <People />
        <Work />
        <Footer locale={locale} />
      </div>
    </IntlProvider>
  );
};

export default App;
