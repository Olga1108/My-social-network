import ActionTypes from './actionTypes';

const createInitialState = () => {
  return {
    currentUser: {
      posts: [],
      followers: [],
      following: [],
    },
    auth: {
      authStatus: false,
      access_token: '',
    },
    usersList: [],
    userById: {
      posts: [],
    },
    // isFetching: true,
    post: {},
    feed: [],
    comments: [],
    errorMessage: ''
  }
};

const usersReducer = (state = createInitialState(), action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return {
        ...state,
        auth: {
          authStatus: true,
          access_token: action.payload
        }
      };

    case ActionTypes.LOGOUT_USER:
      return state = createInitialState();

    case ActionTypes.ADD_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        auth: {
          authStatus: true,
          access_token: localStorage.getItem('access_token')
        }
      };

    case ActionTypes.CHANGE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    case ActionTypes.GET_USERS:
      return {
        ...state,
        usersList: action.payload,
      };

    case ActionTypes.GET_USER_BY_ID:
      return {
        ...state,
        userById: action.payload
      };

    case ActionTypes.LOADING_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };


    case ActionTypes.GET_POST_BY_ID:
      return {
        ...state,
        post: action.payload
      };

    case ActionTypes.GET_FEED:
      return {
        ...state,
        feed: action.payload
      };

    case ActionTypes.GET_COMMENTS_BY_POST_ID:
      return {
        ...state,
        comments: action.payload
      };

      case ActionTypes.SEND_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };

    default:
      return state;
  }
}

export default usersReducer;