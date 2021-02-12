import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../containers/Header';
import { WrapperContent } from '../../containers/Wrapper/Wrapper';

import { getUserByIdThunk } from '../../store/users/thunks';
import { getUserByIdStateSelector } from '../../store/users/selectors';
import { getFollowersFollowingsUserByIdFetch } from '../../api/users.service';

import NoImg from '../../images/icons/avatar.svg';
import { FollowersStyle } from './styled';


const useFollowers = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [followers, setFollowers] = useState([]);
  const { login } = useSelector(getUserByIdStateSelector);

  useEffect(() => {
    async function fetchData() {
      let { followers } = await getFollowersFollowingsUserByIdFetch(id)
      setFollowers(followers)
    }

    fetchData();

    dispatch(getUserByIdThunk(id));
  }, [id, dispatch]);

  return { login, followers }
}


const Followers = () => {
  const { login, followers } = useFollowers()

  return (
    <>
      <Header title={`Followers ${login}`} />
      <WrapperContent>
        <FollowersStyle>
          {followers.map(follower =>
            <li key={follower.id}>
              <Link to={'/profile/' + follower.id}>
                {<img src={follower.avatar || NoImg} alt={follower.login} />}
                <p>{`${follower.login} - `}
                  <span className="full-name">{`${follower.firstName} ${follower.lastName}`}</span>
                </p>
              </Link>
            </li>)}
        </FollowersStyle>
      </WrapperContent>
    </>
  );
}

export default Followers;