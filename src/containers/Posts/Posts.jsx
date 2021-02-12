import React from 'react';
import PostsItem from './Post';
import { PostsStyle } from './styled';

const Posts = ({ posts }) => {
  const postElements = posts.map((post, i) =>
    <PostsItem key={'post' + i} post={post} />
  ).reverse()

  return (
    <>
      {postElements.length ?
        <PostsStyle>
          {postElements}
        </PostsStyle> :
        <p>Not found any</p>
      }
    </>
  );
}

export default Posts;