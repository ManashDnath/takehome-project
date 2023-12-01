import "./area.css";

export default function Area() {
  return (
    <div className="Area-container">
      <div>
        <h3 className="Area-text">Area of Practices</h3>
      </div>
      <div className="Area-gap-y">
        <div className="Area-flex">
          <div className="Area-img-flex">
            <img src="business.png" alt="pic" />
          </div>
          <div>
            <h3 className="Area-img-text">BUSINESS LAW</h3>
          </div>
          <div className="Area-img-f">
            <img src="partnership.png" alt="pic" />
          </div>
          <div>
            <h3 className="Area-img-f-txt">Partnership LAW</h3>
          </div>
        </div>
        <div className="Area-flex-sec">
          <div className="Area-img-fl">
            <img src="realstate.png" alt="pic" />
          </div>
          <div>
            <h3 className="Area-img-text-fl">REAL ESTATE LAW</h3>
          </div>
          <div className="Area-img-fle">
            <img src="businesslaw.png" alt="pic" />
          </div>
          <div>
            <h3 className="Area-img-text-fle">BUSINESS LAW</h3>
          </div>
        </div>
        <div className="Area-flex-thr">
          <div className="Area-img-cont">
            <img src="landlord.png" alt="pic" />
          </div>
          <div>
            <h3 className="Area-img-text-cont">LANDLORD DISPUTES</h3>
          </div>
          <div className="Area-img-conte">
            <img src="elder.png" alt="pic" />
          </div>
          <div><h3 className="Area-img-text-conte">ELDER ABUSE</h3></div>
        </div>
      </div>
    </div>
  );
}
