import React from "react";
import { Link } from "react-router-dom";
import TabTable from "./Table";

function tabComponentThree() {
  return (
    <div className="component__container">
      <div>
        <div className="component__container--tab tabThree ">
          <div>
            <span>Choose one plan and watch everything on Netflix.</span> <br />
            <Link to="/" className="container__tab--link btn-main">
              Try it now
            </Link>
          </div>
        </div>
        <div className="component__container--info container-margin ">
          <TabTable />
        </div>
      </div>
    </div>
  );
}
export default tabComponentThree;
