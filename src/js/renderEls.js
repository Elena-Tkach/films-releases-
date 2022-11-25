import { declOfNum, queryParamDefinition } from './utils';
import { createPage, createCard } from './createEl';

const appListEl = document.querySelector('.app__list');
const listPageEl = document.querySelector('.app__pagination');

export const renderCards =  (result) => { 
  for (let item of result.releases) {
    const option = {
      month: 'long',
      day: 'numeric'
    };

    let date = new Date(item.releaseDate).toLocaleDateString('ru-Ru', option);
    let rating = item.rating ? item.rating.toFixed(1) : 'Нет голосов';
    let duration = `${item.duration} ${declOfNum(item.duration, ['минута', 'минуты', 'минут'])}`;

    let genress = item.genres.map(item => {
      return item.genre;
    });

    appListEl.insertAdjacentHTML('afterbegin', createCard(
      item.filmId,
      item.nameRu,
      item.nameEn,
      item.rating, rating,
      item.posterUrlPreview,
      item.duration, duration,
      date, genress
    ));
  }
};

export const renderPagination = (result) => {
  const queryParam = queryParamDefinition();
  const pages = Math.ceil(result.total / 10);

  for (let i = pages; i >= 1; i--) {
    listPageEl.insertAdjacentHTML('afterbegin', createPage(i, queryParam));
  }
};
