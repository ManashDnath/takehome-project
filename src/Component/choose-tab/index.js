import "./choose.css";

export default function Choose() {
  return (
    <div className="choose-container">
      <div className="choose-topic">Why Choose us?</div>
      <div className="choose-filter">
        <div className="menu-card">
          <div>
            <img src="gift-logo.png" alt="logo" />
          </div>
          <div>
            <p className="profile-name" style={{color: "white", opacity:"1"}}>98% Success Rate</p>
          </div>
          <div>
            <p style={{color:"white"}}className="profile-describe">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <div>
            <button className="profile-history" style={{backgroundColor: "rgba(227, 183, 72, 1)"}}>Read More</button>
          </div>
        </div>
        <div className="menu-card">
          <div>
            <img src="gift-logo.png" alt="logo" />
          </div>
          <div>
            <p className="profile-name" style={{color: "white", opacity:"1"}}>100% Success Rate</p>
          </div>
          <div>
            <p className="profile-describe" >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <div>
            <button className="profile-history" style={{backgroundColor: "rgba(227, 183, 72, 1)"}}>Read More</button>
          </div>
        </div>
        <div className="menu-card">
          <div>
            <img src="gift-logo.png" alt="logo" />
          </div>
          <div>
            <p className="profile-name" style={{color: "white", opacity:"1"}}>100% Success Rate</p>
          </div>
          <div>
            <p className="profile-describe">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <div>
            <button className="profile-history" style={{backgroundColor: "rgba(227, 183, 72, 1)"}}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
