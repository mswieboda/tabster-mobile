import axios from 'axios';

const baseUrl = 'http://tabster.herokuapp.com';
const getNewest = () => axios.get(`${baseUrl}/api/tabs?sort=newest`);
const getTab = (artist, title) => {
  title = title.replace(/\s/g, '+').replace(/\?/g, "%3F");
  artist = artist.replace(/\s/g, '+').replace(/\?/g, "%3F");

  return axios.get(`${baseUrl}/api/tabs/${artist}/${title}`);
};

export {
  getNewest,
  getTab
};
