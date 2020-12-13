import axios from 'axios';

export const loginUser = userData => dispatch => {
    const apiUrl = process.env.QUOTE_API;
   return axios.post(`${apiUrl}/users/login`, userData)
};