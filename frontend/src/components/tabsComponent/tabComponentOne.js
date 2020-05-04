import React from "react";
import { Link } from "react-router-dom";
import Img from "../../assets/images/tab-1-pic.png";

function TabComponentOne() {
  return (
    <div className="component__container">
      <div>
        <div className="component__container--tab">
          <div>
            <span>
              If you decide Netflix isn't for you - no problem. No commitment.
              Cancel online anytime.
            </span>

            <br />
            <Link to="/" className="container__tab--link btn-main">
              Try it now
            </Link>
          </div>
          <div>
            <img src={Img} alt="Tab 1" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TabComponentOne;
