import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../components/Input';
import Likes from '../Likes';

import { hidePopup } from '../../store/popup/actions';
import { getUserByIdThunk } from '../../store/users/thunks';
import { createCommentThunk } from '../../store/users/thunks';
import { getPostByIdStateSelector, getUserByIdStateSelector } from '../../store/users/selectors';


import { PopupStyle, PostTitleStyle, PostImgStyle, PopupContentStyle, PopupCloserStyle, PopupBodyStyle,
  UserBoxStyle, UserAboutStyle, ButtonStyle, FormMessage, MessagesStyle } from './styled';


const usePopup = () => {
  const dispatch = useDispatch()

  const post = useSelector(getPostByIdStateSelector);
  const user = useSelector(getUserByIdStateSelector);

  useEffect(() => {
    if (post.ownerId) {
      dispatch(getUserByIdThunk(post.ownerId));
    }
  }, [post.ownerId, dispatch])

  const closePopup = (e) => {
    if (e.target.getAttribute("id") === "popup") {
      dispatch(hidePopup())
    }
  }
  return { post, user, closePopup, dispatch }
}


const Popup = () => {
  const {post, user, closePopup, dispatch} = usePopup();
  

  const onSubmit = (e) => {
    e.preventDefault()
    const {comment} = e.target.elements
    dispatch(createCommentThunk({
      postId: comment.id,
      text: comment.value
    }))
  }

  return (
    <PopupStyle id='popup' onClick={closePopup}>
      <PopupContentStyle>

        <div className="popup-header">
          <PopupCloserStyle onClick={() => dispatch(hidePopup())}>
            &times;
          </PopupCloserStyle>
        </div>

        <PopupBodyStyle>
          <PostImgStyle>
            <img src={post.imgUrl} alt="Post" />
          </PostImgStyle>

          <UserBoxStyle>
            <UserAboutStyle>
              <img src={user.avatar} alt="avatar" />
              <span>{user.login}</span>
            </UserAboutStyle>

            <PostTitleStyle>
              {post.title || 'No title'}
            </PostTitleStyle>

            <MessagesStyle></MessagesStyle>

            <Likes post={post} />

            <FormMessage>
              <Input
                className="comment"
                type="text"
                name="comment"
                placeholder="Add comment"
              />
              <ButtonStyle onClick={onSubmit}>Send</ButtonStyle>
            </FormMessage>

          </UserBoxStyle>

        </PopupBodyStyle>

      </PopupContentStyle>
    </PopupStyle>
  )
}

export default Popup;