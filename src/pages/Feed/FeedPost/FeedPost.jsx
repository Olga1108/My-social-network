import React from 'react';
import { Link } from 'react-router-dom';
import Likes from '../../../containers/Likes';
import { FeedPostStyle, FeedTitleStyle } from './styled';

const FeedPost = ({ post, users }) => {

  const getLogin = () => {
    let login = '';
    users.forEach(user => {
      if (user._id === post.ownerId) {        
        login = user.login
      }
    })
    return login;
  }

  return (
    <FeedPostStyle>
      <div>
        <img src={post.imgUrl} alt="" />
      </div>
      <FeedTitleStyle>
        <Link to={'/profile/' + post.ownerId}>
          <strong className="login">{getLogin()}</strong>
        </Link>
        <span>{post.title}</span>
      </FeedTitleStyle>

      <Likes post={post} />

    </FeedPostStyle>
  );
}

export default FeedPost;