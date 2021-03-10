import { loginFetch, registrationFetch } from '../../api/auth.service';
import {
  createPostFetch,
  getCurrentUserFetch,
  getUserByIdFetch,
  getUsersByLoginFetch,
  getUsersFetch,
  changeCurrentUserFetch,
  changePasswordFetch,
  getPostByIdFetch,
  followUserFetch,
  getFeedFetch,
  likePostFetch,
  createCommentFetch,
  getCommentPostFetch,
  deleteUserFetch,
  updateCommentFetch,
  deleteCommentFetch
} from '../../api/users.service';
import {
  loginAction,
  logoutAction,
  getCurrentUserAction,
  changeCurrentUserAction,
  getUsersAction,
  getUserByIdAction,
  getPostByIdAction,
  getFeedAction,
  getCommentsByPostIdAction,
  sendErrorAction
} from './actions';


export const registrationThunk = (userData, goToLogin) => {
  return async () => {
    try {
      await registrationFetch(userData);
        goToLogin();
    } catch (error) { }
  }
}

export const loginThunk = (userData) => {
  return async (dispatch) => {
    try {
      const { access_token } = await loginFetch(userData);
      localStorage.setItem('access_token', access_token);
      dispatch(getCurrentUserThunk())
      dispatch(loginAction(access_token))
    } catch (error) { }
  }
}

export const initThunk = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        return dispatch(logoutThunk())
      }
      dispatch(loginAction(token))
      dispatch(getCurrentUserThunk())
    } catch (e) { sendErrorAction(e.message) }
  }
}

export const logoutThunk = () => {
  return async (dispatch) => {
    localStorage.removeItem('access_token');
    dispatch(logoutAction())
  }
}

export const getCurrentUserThunk = () => {
  return async (dispatch) => {
    const currentUser = await getCurrentUserFetch();
    dispatch(getCurrentUserAction(currentUser))
  }
}

export const changeCurrentUserThunk = changeUser => {
  return async (dispatch) => {
    const currentUser = await changeCurrentUserFetch(changeUser);
    dispatch(changeCurrentUserAction(currentUser));
    dispatch(getCurrentUserThunk())
  }
}

export const changePasswordThunk = (passwords) => {
  return async (dispatch) => {
    try {
      await changePasswordFetch(passwords);

      alert('Password changed');
      dispatch(logoutThunk());
      

    } catch (error) { }
  }
}

export const createPostThunk = ({ formData, goToProfile }) => {
  return async () => {
    try {
      await createPostFetch(formData);
      goToProfile()
    } catch (e) { }
  }
}

export const getPostByIdThunk = (postId) => {
  return async (dispatch) => {
    try {
      const post = await getPostByIdFetch(postId);
      dispatch(getPostByIdAction(post));
    } catch (e) { }
  }
}

export const getUsersThunk = () => {
  return async (dispatch) => {
    const users = await getUsersFetch();
    dispatch(getUsersAction(users))
  }
}

export const getUserByIdThunk = userId => {
  return async (dispatch) => {
    const user = await getUserByIdFetch(userId);
    dispatch(getUserByIdAction(user))
  }
}

export const getUsersByLoginThunk = login => {
  return async (dispatch) => {
    try {
      const users = await getUsersByLoginFetch(login);
      dispatch(getUsersAction(users))
    } catch (e) { }
  }
}

export const followUserThunk = userId => {
  return async (dispatch) => {
    await followUserFetch(userId);
    dispatch(getCurrentUserThunk())
  }
}

export const getFeedThunk = () => {
  return async (dispatch) => {
    const feed = await getFeedFetch();
    dispatch(getFeedAction(feed));
  }
}

export const likePostThunk = (postId) => {
  return async (dispatch) => {
    await likePostFetch(postId);
    dispatch(getFeedThunk());
    dispatch(getPostByIdThunk(postId))
  }
}

export const createCommentThunk = (userData) => {
  return async (dispatch) => {
    try{
      const token = localStorage.getItem('access_token');
      await createCommentFetch(userData, token);
    }
  catch(e){
    dispatch(sendErrorAction(e.message))
    }
  }
}

export const getCommentsPostThunk = id => {
  return async (dispatch) => {
    try{
      const token = localStorage.getItem('access_token');
      const comments = await getCommentPostFetch(id, token);
      dispatch(getCommentsByPostIdAction(comments))
    }
    catch(e){
      dispatch(sendErrorAction(e.message))
    } 
  }
}

export const updateCommentThunk = (id, userData) => {
  return async (dispatch) => {
    try{
      const token = localStorage.getItem('access_token');
      await updateCommentFetch(id, userData, token);
    }
    catch(e) {
      dispatch(sendErrorAction(e.message))
    }
  }
}

export const deleteCommentThunk = (id) => {
  return async (dispatch) => {
    try{
      const token = localStorage.getItem('access_token');
      await deleteCommentFetch(id, token);
    }
    catch(e) {
      dispatch(sendErrorAction(e.message))
    }
  }
}

export const deleteUserThunk = (id) => {
  return async (dispatch) => {
    try{
      await deleteUserFetch(id);
      dispatch(logoutAction())
    }
    catch(e) {
      dispatch(sendErrorAction(e.message))
    }
  }
}

export const clearErrorThunk = () => {
  return async (dispatch) => {
    dispatch(sendErrorAction(''))
  }
}


