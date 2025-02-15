// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      Login: "Login",
      "Most Read": "Most Read",
      "Random Words": "Random Words",
      "Random Words Paragraph":
        "In a rapidly changing world, it has become essential to adapt to the ongoing challenges. Technology plays a major role in our daily lives, opening new horizons for work, education, and entertainment. Through continuous innovation, we can achieve progress and success in various fields",
      "Footer Text 1": "Required",
      "Footer Text 2": "There are many types",
      "Footer Text 3": "Some rare words",
      "Footer Text 4": "You need to check first if",
      Twitter: "Watch on Twitter",
      Subscribe: "Subscribe",
      Home: "Home",
      News: "News",
      Economy: "Economy",
      Sports: "Sports",
      Culture: "Culture",
      "Videos and Photos": "Videos and Photos",
      Opinions: "Opinions",
      "Copy Right": "Copyright (c) babel",
    },
  },
  ar: {
    translation: {
      "Welcome to React": "مرحبًا بكم في React و react-i18next",
      Login: "تسجيل الدخول",
      "Most Read": "الأكثر قراءة",
      "Random Words": "الكلمات العشوائية",
      "Random Words Paragraph":
        "في عالمٍ سريع التغير، أصبح من الضروري أن نتكيف مع التحديات المستمرة. التكنولوجيا تلعب دوراً كبيراً في حياتنا اليومية، وتفتح أمامنا آفاقاً جديدة للعمل والتعليم والترفيه. من خلال الابتكار المستمر، يمكننا تحقيق التقدم والنجاح في مختلف المجالات",
      "Footer Text 1": "بما تتطلبه",
      "Footer Text 2": "هناك العديد من الأنواع",
      "Footer Text 3": "بعض النوادر أو الكلمات",
      "Footer Text 4": "عليك أن تتحقق أولًا إذا",
      Twitter: "مشاهدة على تويتر",
      Subscribe: "اشتراك",
      Home: "الرئيسية",
      News: "اخبار",
      Economy: "اقتصاد",
      Sports: "رياضة",
      Culture: "ثقافة",
      "Videos and Photos": "فيديو و صور",
      Opinions: "آراء",
      "Copy Right": "حقوق النشر (c) بابل",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ar", // default language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
