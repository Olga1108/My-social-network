import axios from './axios.instance';

export const getCurrentUserFetch = async () => {
  const { data } = await axios.get('/users/current');
  return data;
}

export const changeCurrentUserFetch = async updateUser => {
  const { data } = await axios.patch('/users/current', updateUser);
  return data;
}

export const changePasswordFetch = async passwords => {
  const { data } = await axios.post('/auth/updatePassword', passwords);
  return data;
}

export const createPostFetch = async formData => {
  const { data } = await axios.post('/posts', formData);
  return data;
}

export const getPostByIdFetch = async postId => {
  const { data } = await axios.get('/posts/' + postId);
  return data;
}

export const getUsersFetch = async () => {
  const { data } = await axios.get('/users');
  return data;
}

export const getUserByIdFetch = async (userId) => {
  const { data } = await axios.get('/users/' + userId);
  return data;
}

export const getUsersByLoginFetch = async (login) => {
  const { data } = await axios.get('/users/', { params: { search: login } });
  return data;
}

export const followUserFetch = async (userId) => {
  const { data } = await axios.get('/users/follow/' + userId);
  return data;
}

export const getFeedFetch = async () => {
  const { data } = await axios.get('/posts/feed');
  return data;
}

export const likePostFetch = async postId => {
  const { data } = await axios.get('/posts/like/' + postId);
  return data;
}

export const getFollowersFollowingsUserByIdFetch = async userId => {
  const { data } = await axios.get('/users/followersAndFollowing/' + userId);
  return data;
}

export const getCommentPostFetch = async (id, token) => {
  const { data } = await axios.get('/comments/' + id, {headers: {Authorization: token}});
  return data;
}

export const createCommentFetch = async (userData, token) => {
   const { data } = await axios.post('/comments', userData, {headers: {Authorization: token}});
   return data;
}

export const updateCommentFetch = async (id, userdData, token) => {
  const { data } = await axios.patch('/comments/' + id, {text: userdData}, {headers: {Authorization: token}});
  return data;
}

export const deleteCommentFetch = async (id, token) => {
  const { data } = await axios.delete('/comments/' + id, {headers: {Authorization: token}});
  return data;
}

export const deleteUserFetch = async (id) => {
  const { data } = await axios.delete('/users/' + id);
  return data;
}