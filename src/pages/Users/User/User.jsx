import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ToggleButton } from '../../../components/Button/Button';
import { ReactComponent as NoImg } from '../../../images/icons/avatar.svg';

import { UserInfoStyle, UserItemStyle, UserAvatarStyle, UserNameStyle } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { followUserThunk } from '../../../store/users/thunks';
import { useEffect } from 'react';
import { getCurrentUserSelector } from '../../../store/users/selectors';


const useUser = (user) => {
  const [isFollow, setIsFollow] = useState(false);
  const dispatch = useDispatch()
  let { following } = useSelector(getCurrentUserSelector);

  useEffect(() => {
    following.forEach(follow => {
      follow.id === user._id && setIsFollow(true)
    })
  }, [following, user._id]);

  const followOnClick = () => {
    dispatch(followUserThunk(user._id))
    setIsFollow(!isFollow);
  }

  return { isFollow, followOnClick }
}

const User = ({ user }) => {
  const { isFollow, followOnClick } = useUser(user);

  return (
    <UserItemStyle>
      <Link to={'/profile/' + user._id}>
        <UserInfoStyle>
          <UserAvatarStyle>
            {user.avatar ? <img src={user.avatar} alt="" /> : <NoImg />}
          </UserAvatarStyle>

          <UserNameStyle>
            {user.login}
          </UserNameStyle>
        </UserInfoStyle>
      </Link>

      <ToggleButton
        className="btn-follow"
        isFollow={isFollow}
        handleClick={followOnClick}
      >
        {isFollow ? "UnFollow" : "Follow"}
      </ToggleButton>
    </UserItemStyle>
  )
}

export default User;