/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translatedText, setTranslatedText] = useState({});

  const translatePage = async () => {
    // eslint-disable-next-line no-undef
    const translated = await translateText(document.documentElement.innerHTML, language);
    setTranslatedText(translated);
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translatePage, translatedText }}>
      {children}
    </TranslationContext.Provider>
  );
};