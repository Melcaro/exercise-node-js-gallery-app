import axios from 'axios';

const URL = 'http://localhost:5000';

export const getContentOfDirectory = async () => {
  return await axios.get(`${URL}/images`);
};
