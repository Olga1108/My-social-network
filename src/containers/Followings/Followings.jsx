import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../containers/Header';
import { WrapperContent } from '../../containers/Wrapper/Wrapper';

import { getUserByIdThunk } from '../../store/users/thunks';
import { getUserByIdStateSelector } from '../../store/users/selectors';
import { getFollowersFollowingsUserByIdFetch } from '../../api/users.service';

import NoImg from '../../images/icons/avatar.svg';
import { FollowingsStyle } from './styled';


const useFollowings = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [followings, setFollowings] = useState([]);
  const { login } = useSelector(getUserByIdStateSelector);

  useEffect(() => {
    async function fetchData() {
      let { following } = await getFollowersFollowingsUserByIdFetch(id)
      setFollowings(following)
    }

    fetchData();

    dispatch(getUserByIdThunk(id));
  }, [id, dispatch]);

  return { login, followings }
}


const Followings = () => {
  const { login, followings } = useFollowings();

  return (
    <>
      <Header title={`Followings ${login}`} />
      <WrapperContent>
        <FollowingsStyle>
          {followings.map(following =>
            <li key={following.id}>
              <Link to={'/profile/' + following.id}>
                {<img src={following.avatar || NoImg} alt={following.login} />}
                <p>{`${following.login} - `}
                  <span className="full-name">{`${following.firstName} ${following.surname}`}</span>
                </p>
              </Link>
            </li>)}
        </FollowingsStyle>
      </WrapperContent>
    </>
  );
}

export default Followings;