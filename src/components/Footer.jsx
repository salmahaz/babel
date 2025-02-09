import "./Footer.css";

const Footer = () => {
  return (
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
  );
};

export default Footer;
