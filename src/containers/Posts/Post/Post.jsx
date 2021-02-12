import React from 'react';
import { useDispatch } from 'react-redux';
import { showPopup } from '../../../store/popup/actions';
import { getPostByIdThunk } from '../../../store/users/thunks';
import { PostsItemStyle } from './styled';

const PostsItem = ({ post }) => {
  const dispatch = useDispatch();

  const letSetPost = (postId) => {
    dispatch(getPostByIdThunk(postId));
    dispatch(showPopup());
  }

  return (
    <PostsItemStyle onClick={() => letSetPost(post._id)}>
      <img src={post.imgUrl} alt="" />
    </PostsItemStyle>
  );
}

export default PostsItem;