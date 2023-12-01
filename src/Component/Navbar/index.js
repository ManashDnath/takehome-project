import "./nav.css";


export default function navbar() {
  return (
    
    <div className="container">
      <div className="nav-content">
        <article className="right-content">
          <article>
            <img src="/firm_logo.png" alt="logo" />
          </article>
          <article className="comp-name"><img src="Igstudio.png" alt="text"/></article>
        </article>
        <article className="center-content">
          <div>Home</div>
          <div>Attorneys</div>
          <div>Practice Areas</div>
          <div>About Us</div>
        </article>
        <article>
          <button className="cont">Contact Now</button>
        </article>
      </div>
    </div>
  );
}
