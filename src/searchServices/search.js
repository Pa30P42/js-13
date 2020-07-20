import { refs } from '../components/refs';
import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
import { axiosImages } from './axiosImages';
import { markupImg } from './markupImg';
import { loadMoreMarkUp } from './loadMore';

let searchObj = '';
let pageNum = 1;
refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  searchObj = e.currentTarget.elements.query.value;
  e.currentTarget.reset();
  refs.loadBtn.classList.add('is-hidden');
  pageNum = 1;
  axiosImages(searchObj, pageNum).then(response => {
    if (response.data.hits.length === 0) {
      return PNotify.error({
        text: 'No match found',
      });
    }

    markupImg(response);
    pageNum += 1;
    refs.loadBtn.classList.remove('is-hidden');
  });
});

refs.loadBtn.addEventListener('click', () => {
  axiosImages(searchObj, pageNum).then(response => {
    loadMoreMarkUp(response);
    pageNum += 1;

    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
});
