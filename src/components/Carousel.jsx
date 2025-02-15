import React, { useState, useRef } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Carousel.css";

export const Carousel = ({ data }) => {
  const { t, i18n } = useTranslation();
  const [slide, setSlide] = useState(0);
  const navRef = useRef();

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  const toggleMenu = () => {
    navRef.current.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
  };

  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <>
      <div className={`carousel ${direction}`}>
        <nav ref={navRef} className="carousel-nav">
          <button onClick={toggleMenu} className="nav-btn close-icon">
            <FaTimes />
          </button>
          <ul>
            <li>
              <a href="#">{t("Home")}</a>
            </li>
            <li>
              <a href="#">{t("News")}</a>
            </li>
            <li>
              <a href="#">{t("Economy")}</a>
            </li>
            <li>
              <a href="#">{t("Sports")}</a>
            </li>
            <li>
              <a href="#">{t("Culture")}</a>
            </li>
            <li>
              <a href="#">{t("Videos and Photos")}</a>
            </li>
            <li>
              <a href="#">{t("Opinions")}</a>
            </li>
          </ul>
        </nav>

        <button onClick={toggleMenu} className="nav-btn menu-icon">
          <FaBars />
        </button>

        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />

        {data.map((item, idx) => (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        ))}

        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />

        <span className="indicators">
          {data.map((_, idx) => (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          ))}
        </span>
      </div>
    </>
  );
};
