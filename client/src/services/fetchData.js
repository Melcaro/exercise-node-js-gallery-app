import axios from 'axios';

//const URL = 'http://localhost:5000';

export const getContentOfDirectory = async path => {
  return await axios.get(`/${path}`);
};
