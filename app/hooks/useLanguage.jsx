"use client";
import { Children, createContext, useContext, useState } from "react";

const LanguageContext = createContext(undefined);
const languages = [
  {
    lang: "en",
    text: "ENG",
  },

  {
    lang: "ru",
    text: "RU",
  },
];

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(languages[0].lang);
  function handleChange() {
    console.log(language, languages);

    if (language === "en") {
      setLanguage(languages.filter((lang) => lang.lang === "ru")[0].lang);
    } else {
      setLanguage(languages.filter((lang) => lang.lang === "en")[0].lang);
    }
  }
  return (
    <LanguageContext.Provider value={{ language, languages, handleChange }}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) return console.log("Use context at the main jsx file");
  return context;
};