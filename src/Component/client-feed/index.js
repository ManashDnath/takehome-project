import "./feed.css";

export default function Feed() {
  return (
    <div className="parent-feed">
      <div className="feed-content">
        <div className="feed-text">
          <h3>What says our happy Clients</h3>
        </div>
        <div className="feed-img-arr">
          <img src="arrow.png" alt="logo" />
        </div>
      </div>
      <div className="choose-filter-feed">
        <div className="menu-card-feed">
          <div>
            <img src="1stpic.png" alt="logo" />
          </div>
          <div>
            <p className="profile-name">Jane Cooper</p>
          </div>
          <div>
            <p>Ceo of Hunt</p>
          </div>
          <div>
            <p className="profile-describe">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <div>
            <button className="profile-history">Read More</button>
          </div>
        </div>
        <div className="menu-card-feed">
          <div>
            <img src="2ndpic.png" alt="logo" />
          </div>
          <div>
            <p className="profile-name">Devon Lane</p>
          </div>
          <div>
            <p>Ceo of Hunt</p>
          </div>
          <div>
            <p className="profile-describe">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <div>
            <button className="profile-history">Read More</button>
          </div>
        </div>
        <div className="menu-card-feed">
          <div>
            <img src="3rdpic.png" alt="logo" />
          </div>
          <div>
            <p className="profile-name">Robert Fox</p>
          </div>
          <div>
            <p>Ceo of Hunt</p>
          </div>
          <div>
            <p className="profile-describe">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <div>
            <button className="profile-history">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
