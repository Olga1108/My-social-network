import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk, getUsersByLoginThunk, deleteUserThunk } from '../../store/users/thunks';
import { getUserByIdStateSelector, getUsersStateSelector, getCurrentUserSelector } from '../../store/users/selectors';
import Input from '../../components/Input';
import { Wrapper } from '../Wrapper/Wrapper';
import { StyleHeader, StyleHeaderContainer, FieldSearch, StyleHeaderTitle, Navbar } from './styled';

import { ReactComponent as IHome } from '../../images/icons/home.svg';
import { ReactComponent as IUsers } from '../../images/icons/team2.svg';
import { ReactComponent as ISettings } from '../../images/icons/settings.svg';
import { ReactComponent as IUser } from '../../images/icons/avatar.svg';
import { ReactComponent as ILogout } from '../../images/icons/logout.svg';



const Header = ({ users, title }) => {
  const dispatch = useDispatch();
  const { login } = useSelector(getUserByIdStateSelector);
  const usersList = useSelector(getUsersStateSelector);
  const currentUserId = useSelector(getCurrentUserSelector)

  const searchUsersByLogin = userLogin => {
    const handler = setTimeout(() => {
      dispatch(getUsersByLoginThunk(userLogin))
    }, 500);

    return () => {
      clearTimeout(handler)
    };
  }

  const deleteUser = () => {
    dispatch(deleteUserThunk(currentUserId.id))
  }

  return (
    <StyleHeader>
      <Wrapper>
        <StyleHeaderContainer>
          {users &&
            <FieldSearch onSubmit={e => e.preventDefault()}>
              <Input
                className="search"
                type="search"
                name="search"
                placeholder="Enter login"
                onChange={e => searchUsersByLogin(e.target.value)}
              />
            </FieldSearch>
          }

          <StyleHeaderTitle>
            {
              users && usersList.length ?
                `Were found ${usersList.length} ${usersList.length > 1 ? 'users' : 'user'}` :
                title || login
            }
          </StyleHeaderTitle>

          <Navbar>
            <li>
              <NavLink exact to='/' activeClassName="active">
                <IHome className="icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to='/users' activeClassName="active">
                <IUsers className="icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to='/settings' activeClassName="active">
                <ISettings className="icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to='/profile' activeClassName="active">
                <IUser className="icon" />
              </NavLink>
            </li>
            <li>
              <button onClick={() => { dispatch(logoutThunk()) }}>
                <ILogout className="icon" />
              </button>
            </li>
            <li onClick={deleteUser}>Delete Profile</li>
          </Navbar>
        </StyleHeaderContainer>
      </Wrapper>
    </StyleHeader>
  );
}


export default Header;