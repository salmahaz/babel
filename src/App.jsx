import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import babelImage from "./assets/babel.png";
import { FaLinkedin, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { slides } from "./data/carouselData.json";
import { Carousel } from "./components/Carousel.jsx";
import MostRead from "./components/MostRead.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const changeLang = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <div className={`container ${lang === "ar" ? "rtl" : "ltr"}`}>
      <div className="custom-box">
        <img src={babelImage} alt="logo" className="custom-image" />
        <div className="custom-div">
          <div className="top-content">
            <button onClick={changeLang}>
              {lang === "ar" ? "English" : "عربي"}
            </button>
            <p>{t("Login")}</p>
          </div>

          <Carousel data={slides} />

          <div>
            <p
              className={`most-read-title ${
                lang === "ar" ? "right-align" : "left-align"
              }`}
            >
              {t("Most Read")}
            </p>
            <div className="most-read">
              <div className="most-read-first-part">
                <div className="most-read-text">
                  <p>{t("Random Words")}</p>
                </div>
                <div className="minus-sign"> - </div>
              </div>
              <div
                className={`most-read-paragraph ${
                  lang === "ar" ? "right-align" : "left-align"
                }`}
              >
                <p>{t("Random Words Paragraph")}</p>
              </div>
            </div>

            <div className="all-most-reads">
              <div className="most-read-first-part">
                <div className="most-read-subtitle">
                  <p>{t("Random Words")}</p>
                </div>
                <div className="plus-sign"> + </div>
              </div>

              <div className="most-read-first-part">
                <div className="most-read-subtitle">
                  <p>{t("Random Words")}</p>
                </div>
                <div className="plus-sign"> + </div>
              </div>

              <div className="most-read-first-part">
                <div className="most-read-subtitle">
                  <p>{t("Random Words")}</p>
                </div>
                <div className="plus-sign"> + </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="footer-text-container">
              <div className="footer-text">
                <p>{t("Footer Text 1")}</p>
                <p>{t("Footer Text 2")}</p>
                <p>{t("Footer Text 3")}</p>
                <p>{t("Footer Text 4")}</p>
              </div>
              <div className="footer-text">
                <p>{t("Footer Text 1")}</p>
                <p>{t("Footer Text 2")}</p>
                <p>{t("Footer Text 3")}</p>
                <p>{t("Footer Text 4")}</p>
              </div>
              <div className="footer-text">
                <p>{t("Footer Text 1")}</p>
                <p>{t("Footer Text 2")}</p>
                <p>{t("Footer Text 3")}</p>
                <p>{t("Footer Text 4")}</p>
              </div>
            </div>

            <div className="input-wrapper">
              <input type="text" name="input" />
              <button type="submit" name="button">
                {t("Subscribe")}
              </button>
            </div>

            <div className="social-links">
              <p>{t("Twitter")}</p>
              <div className="icons">
                <FaTwitterSquare />
                <FaFacebookSquare />
                <FaLinkedin />
              </div>
            </div>
          </div>
          <p className="copy-right">{t("Copy Right")}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
