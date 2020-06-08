import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import AdminThemeRoutes from "./admin-theme/admin-theme-routes";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import FilmsRoutes from "./pages/films/routes";



function Root() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <FilmsRoutes></FilmsRoutes>
        </Route>
        <Route path="/films">
          <FilmsRoutes></FilmsRoutes>
        </Route>
        <Route path="/theme">
          <AdminThemeRoutes />
        </Route>

      </Switch>
    </Router>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
