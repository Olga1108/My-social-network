import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../containers/Header';
import { WrapperContent } from '../../containers/Wrapper/Wrapper';

import { getFeedThunk, getUsersThunk } from '../../store/users/thunks';
import { getFeedStateSelector, getUsersStateSelector } from '../../store/users/selectors';
import FeedPost from './FeedPost';
import { FeedContainer } from './styled';

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector(getFeedStateSelector);
  const users = useSelector(getUsersStateSelector);

  useEffect(() => {
    dispatch(getFeedThunk());
    dispatch(getUsersThunk());
  }, [dispatch])
  
  const feedElements = feed.map(post => <FeedPost key={post._id} post={post} users={users} />).reverse();

  return (
    <>
      <Header title="Feed" />
      <WrapperContent>
        <FeedContainer>
          {feedElements}
        </FeedContainer>
      </WrapperContent>
    </>
  );
}

export default Feed;