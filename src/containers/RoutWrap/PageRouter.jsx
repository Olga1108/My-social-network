import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import { routes } from '../../constants/routes';


const PageRouter = () => {
  return (
    <Switch>
      <Route exact path={routes.feed.path} component={routes.feed.component} />
      <Route path={routes.users.path} component={routes.users.component}/>
      <Route path={routes.profile.path + "/:id"} component={routes.profile.component} />
      <Route path={routes.profile.path} component={routes.profile.component} />
      <Route path={routes.settings.path} component={routes.settings.component} />
      <Route path={routes.createPost.path} component={routes.createPost.component} />
      <Route path={routes.followers.path} component={routes.followers.component}/>
      <Route path={routes.followings.path} component={routes.followings.component}/>
      <Redirect to={routes.feed.path} />
    </Switch>
  );
}

export default PageRouter;