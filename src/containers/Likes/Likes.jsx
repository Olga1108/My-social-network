import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ISendMessage } from '../../images/icons/messenger.svg';
import { ReactComponent as ILikeActive } from '../../images/icons/redheart.svg';
import { ReactComponent as ILikeNot } from '../../images/icons/heart.svg';
import { getUserByIdThunk, likePostThunk } from '../../store/users/thunks';
import { getCurrentUserSelector } from '../../store/users/selectors';
import { StyleLikes } from './styled';


const useLikes = (post) => {
  const dispatch = useDispatch();
  const [isLike, setIsLike] = useState(false);
  const { id: currentUserId } = useSelector(getCurrentUserSelector);

  post.likes = post.likes || [];

  useEffect(() => {
    post.likes.forEach(like => {
      like._id === currentUserId && setIsLike(true)
    })    
  }, [post.likes, currentUserId]);

  const toggleSetLike = () => {
    dispatch(likePostThunk(post._id))
    setIsLike(!isLike);
    dispatch(getUserByIdThunk(post.ownerId))
  }

  const lastLikeUserLogin = post.likes.length && post.likes[post.likes.length - 1].login;

  return { isLike, toggleSetLike, lastLikeUserLogin }
}

// my Component
const Likes = ({ post }) => {
  const { isLike, toggleSetLike, lastLikeUserLogin } = useLikes(post);

  return (
    <StyleLikes>
      {!isLike ?
        <ILikeNot className="icon icon-heart" onClick={toggleSetLike} /> :
        <ILikeActive className="icon icon-heart" onClick={toggleSetLike} />
      }
      <ISendMessage className="icon icon-message" />
      <span>Liked <strong>{lastLikeUserLogin} </strong>
        {post.likes.length > 1 ? `and ${post.likes.length - 1} ` : null}
      </span>
    </StyleLikes>
  );
}

export default Likes;