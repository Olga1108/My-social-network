import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import User from './User';
import Header from '../../containers/Header';
import { WrapperContent } from '../../containers/Wrapper/Wrapper'
import { ReactComponent as NotFoundImg } from '../../images/icons/404-error.svg'

import { getUsersThunk } from '../../store/users/thunks';
import { getCurrentUserSelector, getUsersStateSelector } from '../../store/users/selectors';
import { NotFoundBlock } from './styled';


const useUsers = () => {
  const users = useSelector(getUsersStateSelector);
  const { id: currentId } = useSelector(getCurrentUserSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk())
  }, [dispatch])


  const userList = users.filter(user => user._id !== currentId)
    .map(user => <User key={user._id} user={user} />)

  return { users, userList }
}


const Users = () => {
  const { users, userList } = useUsers();

  return (
    <>
      <Header users />
      <WrapperContent>
        {users.length ?
          <div className='users'>
            {userList}
          </div>
          :
          <NotFoundBlock>
            <NotFoundImg />
            <p>Users was not found</p>
          </NotFoundBlock>
        }
      </WrapperContent>
    </>
  );
}

export default Users;