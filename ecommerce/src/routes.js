import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import home from "./pages/home";
import description from "./pages/description";
import cart from "./pages/cart";
import login from "./pages/login";
import finish from "./pages/finish";
import profile from "./pages/profile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/description/:id" component={description} />
        <Route path="/cart" component={cart} />
        <Route path="/login" component={login} />
        <Route path="/profile/:id" component={profile} />
        <Route path="/finish" component={finish} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
