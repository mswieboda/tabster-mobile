import axios from 'axios';

const baseUrl = 'http://tabster.herokuapp.com';
const getNewest = () => axios.get(`${baseUrl}/api/tabs?sort=newest`);
const getTab = (artist, title) => axios.get(`${baseUrl}/api/tabs/${artist}/${title}`);

export {
  getNewest,
  getTab
};
