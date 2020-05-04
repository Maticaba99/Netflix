import React from "react";
import { Link } from "react-router-dom";
import ImgTv from "../../assets/images/tab-tv.png";
import ImgTablet from "../../assets/images/tab-tablet.png";
import ImgMacBook from "../../assets/images/tab-macbook.png";

function tabComponentTwo() {
  return (
    <div className="component__container">
      <div>
        <div className="component__container--tab tabTwo">
          <div>
            <span>
              Watch TV shows and movies anytime, anywhere - personalizated for
              you.
            </span>

            <br />
            <Link to="/" className="container__tab--link btn-main">
              Try it now
            </Link>
          </div>
        </div>
        <div className="component__container--images">
          <div>
            <img src={ImgTv} alt=" TV" />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
          <div>
            <img src={ImgTablet} alt=" Tablet" />
            <h3>Watch instantly or download for later</h3>
            <p>Available on phone and tablet, wherever you go.</p>
          </div>
          <div>
            <img src={ImgMacBook} alt=" MacBook" />
            <h3>Use any computer</h3>
            <p>Wath right on Netflix.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default tabComponentTwo;
