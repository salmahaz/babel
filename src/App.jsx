import { useState } from "react";

import "./App.css";

import babelImage from "./assets/babel.png";
import { FaLinkedin, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { slides } from "./data/carouselData.json";
import { Carousel } from "./components/Carousel.jsx";
import MostRead from "./components/MostRead.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="container">
      <div className="custom-box">
        <img src={babelImage} alt="logo" className="custom-image" />
        <div className="custom-div">
          <p>تسجيل الدخول</p>

          <Carousel data={slides} />

          <div>
            <p className="most-read-title">الأكثر قراءة</p>
            <div className="most-read">
              <div className="most-read-first-part">
                <div className="most-read-text">
                  <p>الكلمات العشوائية</p>
                </div>
                <div className="minus-sign"> - </div>
              </div>
              <div className="most-read-paragraph">
                <p>
                  في عالمٍ سريع التغير، أصبح من الضروري أن نتكيف مع التحديات
                  المستمرة. التكنولوجيا تلعب دوراً كبيراً في حياتنا اليومية،
                  وتفتح أمامنا آفاقاً جديدة للعمل والتعليم والترفيه. من خلال
                  الابتكار المستمر، يمكننا تحقيق التقدم والنجاح في مختلف
                  المجالات
                </p>
              </div>
            </div>

            <div className="all-most-reads">
              <div className="most-read-first-part">
                <div className="most-read-subtitle">
                  <p>الكلمات العشوائية</p>
                </div>
                <div className="plus-sign"> + </div>
              </div>

              <div className="most-read-first-part">
                <div className="most-read-subtitle">
                  <p>الكلمات العشوائية</p>
                </div>
                <div className="plus-sign"> + </div>
              </div>

              <div className="most-read-first-part">
                <div className="most-read-subtitle">
                  <p>الكلمات العشوائية</p>
                </div>
                <div className="plus-sign"> + </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="footer-text-container">
              <div className="footer-text">
                <p>بما تتطلبه</p>
                <p>هناك العديد من الانواع</p>
                <p>بعض النوادر او الكلمات</p>
                <p>عليك ان تتحقق اولا ان</p>
              </div>
              <div className="footer-text">
                <p>بما تتطلبه</p>
                <p>هناك العديد من الانواع</p>
                <p>بعض النوادر او الكلمات</p>
                <p>عليك ان تتحقق اولا ان</p>
              </div>
              <div className="footer-text">
                <p>بما تتطلبه</p>
                <p>هناك العديد من الانواع</p>
                <p>بعض النوادر او الكلمات</p>
                <p>عليك ان تتحقق اولا ان</p>
              </div>
            </div>

            <div className="input-wrapper">
              <input type="text" name="input" />
              <button type="submit" name="button">
                اشتراك
              </button>
            </div>

            <div className="social-links">
              <p>مشاهدة على تويتر</p>
              <div className="icons">
                <FaTwitterSquare />
                <FaFacebookSquare />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
