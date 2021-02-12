import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Posts from '../../containers/Posts';
import Header from '../../containers/Header';
import { ToggleButton } from '../../components/Button/Button';
import { WrapperContent } from '../../containers/Wrapper/Wrapper';

import {
  getCurrentUserSelector, getIsFetchingStateSelector, getUserByIdStateSelector } from '../../store/users/selectors';

import { followUserThunk, getUserByIdThunk } from '../../store/users/thunks';
import NoImg from '../../images/icons/avatar.svg';
import { ProfileAccount, ProfileAvatar, ProfileInfo, AmountPosts, ProfileText, AddPostBtnStyle } from './styled';



const useProfile = () => {
  const [isFollow, setIsFollow] = useState(false);
  const dispatch = useDispatch();
  let { id: userId } = useParams();
  const { pathname } = useLocation();
  const isShowPreloader = useSelector(getIsFetchingStateSelector);
  const { id: currentId, following } = useSelector(getCurrentUserSelector);
  const { firstName, surname, avatar, posts, followersCount, followingsCount } = useSelector(getUserByIdStateSelector);

  let id = pathname === '/profile' ? currentId : userId;;

  useEffect(() => {
    if (id) {
      dispatch(getUserByIdThunk(id));
    }
  }, [id, dispatch])

  useEffect(() => {
    following.forEach(follow => {
      follow.id === id && setIsFollow(true)
    })
  }, [following, id]);

  const handleClick = () => {
    dispatch(followUserThunk(id))
    setIsFollow(!isFollow);
  }

  return {
    avatar,
    firstName,
    surname,
    posts,
    followersCount,
    followingsCount,
    isFollow,
    userId,
    handleClick,
    isShowPreloader,
    id
  }
}


const Profile = () => {
  const { avatar, firstName, surname, posts, followersCount, followingsCount, isFollow, userId, id, handleClick } = useProfile()

  return (
    <>
      <Header />
      <WrapperContent>
        <ProfileAccount>
          <ProfileAvatar>
            {<img src={avatar ? avatar : NoImg} alt="" />}
          </ProfileAvatar>
          <ProfileInfo>
            <AmountPosts>
              <span><strong>{posts.length}</strong> posts</span>
              <span>
                <Link to={'/followers/' + id}>
                  <strong>{followersCount}</strong> followers
                </Link>
              </span>
              <span>
                <Link to={'/followings/' + id}>
                  <strong>{followingsCount}</strong> followings
                </Link>
              </span>
            </AmountPosts>

            {userId && <ToggleButton
              isFollow={isFollow}
              type="button"
              className="btn-profile"
              handleClick={handleClick}
            >
              {isFollow ? "UnFollow" : "Follow"}
            </ToggleButton>
            }

            <ProfileText>
              {`${firstName || 'No firsName'} ${surname || 'No surname'}`}
            </ProfileText>
          </ProfileInfo>
        </ProfileAccount>

        <AddPostBtnStyle>
          <Link to='/new_post'>Add new post</Link>
        </AddPostBtnStyle>

        <Posts posts={posts} />

      </WrapperContent>
      
    </>
  );
}

export default Profile;