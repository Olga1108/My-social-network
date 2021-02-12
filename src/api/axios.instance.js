import axios from 'axios';
export default axios.create({
  baseURL: 'https://hipstagram-api.herokuapp.com'
})