import "./App.css";
import Button from "react-bootstrap/Button";
import bgImage from "./images/pattern-bg.svg";
import curve from "./images/pattern-curve.svg";
import quote from "./images/pattern-quotes.svg";
import tanya from "./images/image-tanya.jpg";
import next from "./images/icon-next.svg";
import prev from "./images/icon-prev.svg";
import john from "./images/image-john.jpg";
import React, { useState } from "react";

function App() {
  const [img, setImg] = useState(false);
  return (
    <div className="a">
      <img className="bgImage" src={bgImage} alt="" />
      <img src={curve} className="curve" />
      <img src={quote} alt="" className="quoteimg" />
      <div className="d-flex main">
        <div className="first">
          {!img && (
            <p className="quote quote-1">
              “ I’ve been interested in coding for a while but never taken the
              jump, until now. I couldn’t recommend this course enough. I’m now
              in the job of my dreams and so excited about the future. ”
            </p>
          )}
          {img && (
            <p className="quote quote-2">
              “ If you want to lay the best foundation possible I’d recommend
              taking this course. The depth the instructors go into is
              incredible. I now feel so confident about starting up as a
              professional developer. ”
            </p>
          )}

          {!img && (
            <p className="person person-1">
              <span>Tanya Sinclair </span> UX Engineer
            </p>
          )}
          {img && (
            <p className="person person-2">
              <span> John Tarkpor</span> Junior Front-end Developer
            </p>
          )}
        </div>

        <div className="second ">
          {!img && <img src={tanya} className="tanya" alt="" srcset="" />}
          {img && <img src={john} className="tanya" alt="" />}
          <div className="buttons ">
            <button className="one" onClick={() => setImg(!img)}>
              <img src={prev} alt="" />
            </button>
            <button className="two" onClick={() => setImg(!img)}>
              <img src={next} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
