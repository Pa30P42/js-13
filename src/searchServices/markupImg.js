import { refs } from '../components/refs';
import imageTemplate from '../templates/imageTemplate.hbs';

export function markupImg(response) {
  const markup = imageTemplate(response.data.hits);
  refs.gallery.innerHTML = markup;
  //   refs.gallery.insertAdjacentHTML('beforeend', markup);
}
