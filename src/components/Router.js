import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AgeSelect from "./AgeSelect";
import App from "./App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AgeSelect} />
      <Route path="/store/:storeid" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
