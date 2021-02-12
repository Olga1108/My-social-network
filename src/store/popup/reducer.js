import ActionTypes from './actionTypes';

const initialState = {
  isOpen: false,
}

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_POPUP:
      return {
        isOpen: true
      }

    case ActionTypes.HIDE_POPUP:
      return initialState

    default:
      return state;
  }
}

export default popupReducer;