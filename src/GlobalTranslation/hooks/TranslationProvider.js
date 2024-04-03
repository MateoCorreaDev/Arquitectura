import axios from 'axios';

const API_URL = 'https://translation.googleapis.com/language/translate/v2';

export const translateText = async (doc, targetLanguage) => {
  const response = await axios.post(
    // eslint-disable-next-line no-undef
    `${API_URL}?key=${process.env.TranslationKey}`,
    {
      q: doc,
      target: targetLanguage,
    }
  );

  return response.data.data.translations[0].translatedText;
};

