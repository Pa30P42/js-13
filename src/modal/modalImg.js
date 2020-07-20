import { refs } from '../components/refs';
import * as basicLightbox from 'basiclightbox';

refs.gallery.addEventListener('click', e => {
  if (e.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(`
            <img src="${e.target.dataset.source}" width="800" height="600">
        `);
    // console.log();
    instance.show();
  }
});
