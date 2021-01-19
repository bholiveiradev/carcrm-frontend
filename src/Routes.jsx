import React, { Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./view/components/Loading";

const Register = lazy(() => import('./view/register'));
const Auth = lazy(() => import('./view/auth'));
const Vehicles = lazy(() => import('./view/vehicles'));

const Routes = () => (
  <Router>
    <Suspense fallback={Loading}>
      <Switch>
        <Route path="/" component={Auth} exact />
        <Route path="/login" component={Auth} />
        <Route path="/register" component={Register} />
        <Route path="/vehicles" component={Vehicles} exact />
        <Route path="*" component={() => <h1>Page Not Found!</h1>} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
