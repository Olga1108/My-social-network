import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";

import Likes from '../Likes';
import { ReactComponent as NoImg } from '../../images/icons/avatar.svg';
import PenIcon from '../../images/icons/pen.svg';
import CloseIcon from '../../images/icons/close.gif';
import { hidePopup } from '../../store/popup/actions';
import { getUserByIdThunk, getUsersThunk } from '../../store/users/thunks';
import { createCommentThunk, getCommentsPostThunk, updateCommentThunk, deleteCommentThunk } from '../../store/users/thunks';
import { getPostByIdStateSelector, getUserByIdStateSelector, getCommentsByPostIdSelector, getCurrentUserSelector } from '../../store/users/selectors';

import { UserAvatarStyle } from '../../pages/Users/User/styled';
import { PopupStyle, PostTitleStyle, PostImgStyle, PopupContentStyle, PopupCloserStyle, PopupBodyStyle,
  UserBoxStyle, UserAboutStyle, ButtonStyle, FormMessage, MessagesStyle, SendLinkWrapperStyle, SettingsWrapperStyle, CommentWrapperStyle } from './styled';


const usePopup = () => {
  
  const dispatch = useDispatch()

  const post = useSelector(getPostByIdStateSelector);
  const user = useSelector(getUserByIdStateSelector);

  useEffect(() => {
    if (post.ownerId) {
      dispatch(getUserByIdThunk(post.ownerId));
      dispatch(getUsersThunk())
      dispatch(getCommentsPostThunk(post._id))
    }
  }, [post.ownerId, post._id, dispatch])

  const closePopup = (e) => {
    if (e.target.getAttribute("id") === "popup") {
      dispatch(hidePopup())
    }
  }
  return { post, user, closePopup, dispatch }
}


const Popup = () => {
  const {post, user, closePopup, dispatch} = usePopup();
  const [update, setUpdate] = useState(false)
  const commentRef = useRef('')
  const currentUserId = useSelector(getCurrentUserSelector)
  const comments = useSelector(getCommentsByPostIdSelector)

  const addComment = async (e) =>{
    e.preventDefault();
   
    await dispatch(createCommentThunk({postId: post._id, text: commentRef.current.value}))
    commentRef.current.value = ''
     dispatch(getCommentsPostThunk(post._id))
    
}

const updateCommentLable = (e) =>{
  setUpdate(e)
  commentRef.current.value = e.text
}
const updateComment = async () =>{
  await dispatch(updateCommentThunk(update.id, commentRef.current.value))
   dispatch(getCommentsPostThunk(post._id))
  commentRef.current.value = ''
  setUpdate(false)
}
const closeUpdate = () =>{
  commentRef.current.value = ''
  setUpdate(false)
}
const deleteCommentLable = async (e) =>{
  await dispatch(deleteCommentThunk(e.id))
  commentRef.current.value = ''
  setUpdate(false)
   dispatch(getCommentsPostThunk(post._id))
}


  return (
    <PopupStyle id='popup' onClick={closePopup}>
      <PopupContentStyle onClick={(e) => e.stopPropagation()}>

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

            <MessagesStyle>
              {
                 comments.map((e) =>{
                            console.log(e.isEdited)
                            return(
                            <CommentWrapperStyle key={e.id}>
                                <div className="comment">
                                    <div>
                                        <Link to={'/profile/' + e.owner.id} onClick={closePopup}>
                                          <UserAvatarStyle>
                                              {e.owner.avatar ? <img src={e.owner.avatar} alt="" /> : <NoImg />}
                                          </UserAvatarStyle>
                                        </Link>
                                    </div>
                                    <div className="textWrapper">
                                        <p className="commentText"><b>{e.owner.login} </b>{e.text}</p>
                                    </div>
                                </div>
                                {e.isEdited && <SettingsWrapperStyle><b>updated</b></SettingsWrapperStyle>}
                                {
                                    currentUserId.id === e.owner.id &&
                                    <SettingsWrapperStyle>
                                        <label onClick={() => updateCommentLable(e)} className="update" htmlFor="addComment">
                                            <b>Update</b>
                                        </label>
                                        <label onClick={() => deleteCommentLable(e)} className="update" htmlFor="addComment">
                                            <b>Delete</b>
                                        </label>
                                    </SettingsWrapperStyle>
                                }
                            </CommentWrapperStyle>
                            )
                        })
                        }
            </MessagesStyle>

            <Likes post={post} />

            <FormMessage>
              <input id="addComment" ref={commentRef} placeholder="Add comment" type="text" className="sendInput"/>
                  {
                  update?
                  <SendLinkWrapperStyle>
                      <img className="sendIcon" onClick={updateComment} src={PenIcon} alt="update"/>
                      <img className="sendIcon" onClick={closeUpdate} src={CloseIcon} alt="close"/>
                  </SendLinkWrapperStyle>
                    :
                <ButtonStyle onClick={addComment}>Send</ButtonStyle>
                              }
            </FormMessage>

          </UserBoxStyle>

        </PopupBodyStyle>

      </PopupContentStyle>
    </PopupStyle>
  )
}

export default Popup;