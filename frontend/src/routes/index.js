import React from "react";
import Main from "../pages/index";
import "../assets/less/Theme.less";

import { Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  );
}

export default Routes;
