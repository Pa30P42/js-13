import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';

const axios = require('axios');

export function axiosImages(searchObj, pageNum = 1) {
  const apiKey = '17517629-df8f69dc57338ff5eaff7a83f';
  //   let pageNum = 1;

  if (searchObj !== '') {
    return axios.get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchObj}&page=${pageNum}&per_page=12&key=${apiKey}`,
    );
  }
}
