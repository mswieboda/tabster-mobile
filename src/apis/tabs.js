import axios from 'axios';

const baseUrl = 'http://tabster.herokuapp.com';
const getNewest = () => axios.get(`${baseUrl}/api/tabs?sort=newest`);

export {
  getNewest,
};
