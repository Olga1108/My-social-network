import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from '../../constants/routes';

const RegistrationRouter = () => {

  return (
    <Switch>
      <Route path={routes.login.path} component={routes.login.component} />
      <Route path={routes.registration.path} component={routes.registration.component} />
      <Redirect to={routes.login.path} />
    </Switch>
  )
}

export default RegistrationRouter;