import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Header from '../../containers/Header';
import ChangeProfile from '../../containers/ChangeProfile';
import ChangePassword from '../../containers/ChangePassword';
import { WrapperContent } from '../../containers/Wrapper/Wrapper';
import { SettingsStyle, ListSettings, SettingsContentStyle } from './styled';

const Settings = () => {
  return (
    <>
      <Header title="Settings" />
      <WrapperContent>
        <SettingsStyle>
          <ListSettings>
            <li><NavLink to='/settings/change_profile' activeClassName="active">Change profile</NavLink></li>
            <li><NavLink to='/settings/change_password' activeClassName="active">Change password</NavLink></li>
          </ListSettings>
          <SettingsContentStyle>
            <Switch>
              <Route path='/settings/change_profile' component={ChangeProfile} />
              <Route path='/settings/change_password' component={ChangePassword} />
              <Redirect to='/settings/change_profile' />
            </Switch>
          </SettingsContentStyle>
        </SettingsStyle>

      </WrapperContent>
    </>
  );
}

export default Settings;