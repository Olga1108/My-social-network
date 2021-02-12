export const usersStateSelector = state => state.users;

export const getAuthSelector = state => usersStateSelector(state).auth;
export const getAuthStatusSelector = state => getAuthSelector(state).authStatus;

export const getCurrentUserSelector = state => usersStateSelector(state).currentUser;
export const getCurrentUserPostsStateSelector = state => getCurrentUserSelector(state).posts;

export const getUsersStateSelector = state => usersStateSelector(state).usersList;

export const getUserByIdStateSelector = state => usersStateSelector(state).userById;
export const getLoginUserByIdStateSelector = state => getUserByIdStateSelector(state).login

export const getIsFetchingStateSelector = state => usersStateSelector(state).isFetching;

export const getPostByIdStateSelector = state => usersStateSelector(state).post;

export const getFeedStateSelector = state => usersStateSelector(state).feed;

export const getCommentsByPostIdSelector = state => usersStateSelector(state).comments;