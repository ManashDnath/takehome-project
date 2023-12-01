import "./hero.css";

export default function heroSection() {
  return (
    <div className="group">
      <div className="group-text">
        <div className="group-wrap">
          <div className="text-thin">You don’t have to</div>
          <div className="text-thick">Fight them Alone.</div>
        </div>
        <div>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
        </div>
        <div className="group-input">
          <div>
            <input type="text" placeholder="Enter your email adress" />
          </div>
          <div>
            <button className="talk">Let's Talk</button>
          </div>
        </div>
      </div>
      <div className="group-img">
        <img src="Profile-pic.png" alt="img"/>
      </div>
    </div>
  );
}
