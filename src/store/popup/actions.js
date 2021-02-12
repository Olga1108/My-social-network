import ActionTypes from './actionTypes';

export const showPopup = () => {
  return {
    type: ActionTypes.SHOW_POPUP,
  }
}

export const hidePopup = () => {
  return {
    type: ActionTypes.HIDE_POPUP
  }
}