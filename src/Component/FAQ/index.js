import "./faq.css";
import { ReactComponent } from "./plus.svg";

function Faq() {
  return (
    <div className="parent-faq">
      <div className="faq-text">FAQ</div>
      <div className="faq-container">
        <div>
          <p className="faq-text-entry">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <div className="faq-list">
          <div>
            <h3 style={{color:"white"}}>Do I need a personal injury report?</h3>
          </div>
          <div style={{color:"white" , opacity:"30%"}}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </div>
          <hr />
          <div className="faq-tune">
            <div>
              <h3 style={{color:"white"}}>How much is my case worth?</h3>
            </div>
            <div>
              <ReactComponent />
            </div>
          </div>
          <hr />

          <div className="faq-tune">
            <div>
              <h3 style={{color:"white"}}>What should I do right after car accidect</h3>
            </div>
            <div>
              <ReactComponent />
            </div>
          </div>
          <hr />
          <div className="faq-tune">
            <div>
              <h3 style={{color:"white"}}>How much is my case worth?</h3>
            </div>
            <div>
              <ReactComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
