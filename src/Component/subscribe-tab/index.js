import "./subs.css";

function Subscribe() {
  return (
    <div className="main-cont">
      <div className="subs-content">
        <div>
          <h3 className="child-subs">Subscribe Our Newsletter</h3>
        </div>
        <div className="subs-text">
          <div>
            <input
              style={{ borderRadius: "8px 0px 0px 8px", height: "53px" }}
              type="text"
              placeholder="Name : "
            />
          </div>
          <div>
            <input
              className="email"
              type="text"
              placeholder="Enter your Email : "
            />
          </div>
          <div className="subs-send">
            <button
              style={{
                borderRadius: "0px 8px 8px 0px",
                height: "53px",
                backgroundColor: "rgba(227, 183, 72, 1)",
              }}
              className="kl"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
