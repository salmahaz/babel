import "./MostRead.css";

const MostRead = () => {
  return (
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
            في عالمٍ سريع التغير، أصبح من الضروري أن نتكيف مع التحديات المستمرة.
            التكنولوجيا تلعب دوراً كبيراً في حياتنا اليومية، وتفتح أمامنا آفاقاً
            جديدة للعمل والتعليم والترفيه. من خلال الابتكار المستمر، يمكننا
            تحقيق التقدم والنجاح في مختلف المجالات
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
  );
};

export default MostRead;
