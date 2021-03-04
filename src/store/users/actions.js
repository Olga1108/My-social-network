import ActionTypes from './actionTypes';

export const loginAction = accessToken => {
  return {
    type: ActionTypes.LOGIN_USER,
    payload: accessToken,
  }
}

export const logoutAction = () => {
  return {
    type: ActionTypes.LOGOUT_USER,
  }
}

export const getCurrentUserAction = currentUser => {
  return {
    type: ActionTypes.ADD_CURRENT_USER,
    payload: currentUser
  }
}

export const changeCurrentUserAction = currentUser => {
  return {
    type: ActionTypes.CHANGE_CURRENT_USER,
    payload: currentUser
  }
}

export const getUsersAction = users => {
  return {
    type: ActionTypes.GET_USERS,
    payload: users
  }
}

export const getUserByIdAction = user => {
  return {
    type: ActionTypes.GET_USER_BY_ID,
    payload: user
  }
}

export const togglePreloaderAction = isFetching => {
  return {
    type: ActionTypes.LOADING_FETCHING,
    payload: isFetching
  }
}

export const getPostByIdAction = post => {
  return {
    type: ActionTypes.GET_POST_BY_ID,
    payload: post
  }
}

export const getFeedAction = feed => {
  return {
    type: ActionTypes.GET_FEED,
    payload: feed
  }
}

export const getCommentsByPostIdAction = comments => {
  return {
    type: ActionTypes.GET_COMMENTS_BY_POST_ID,
    payload: comments
  }
}

export const sendErrorAction = error => {
  return {
    type: ActionTypes.SEND_ERROR,
    payload: error
  }
}