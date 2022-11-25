
export const createPage = (i, queryParam) => {
  return ` <li class="app__pagination-item">
            <a href="?page=${i}" class="app__pagination-link ${i == queryParam ?
      'app__pagination-link--current' : ''}">${i}</a>
          </li>
        `;
};

export const createCard = (filmId, nameRu, nameEn, ratingIt, rating, posterUrlPreview, durationIT, duration, date, genress) => {
  return `
            <li class="app__list-item">
              <article class="app__card movie-card">
                <a href="https://www.kinopoisk.ru/film/${filmId}/" class="movie-card__link" target="_blank">
                  <div class="movie-card__image-wrap">
                    <img src="${posterUrlPreview}" alt="${!nameRu ? nameEn : nameRu}" loading="lazy" class="movie-card__image">
                    <div class="movie-card__hover">

                      <div class="movie-card__rating ${ratingIt === null ? 'movie-card__rating--null' : ''}">${rating}</div>
                      
                      <div class="movie-card__genres">${genress}</div>
                      <div class="movie-card__duration ${durationIT === 0 ? 'movie-card__duration--hidden' : ''}">${duration}</div>

                    </div>
                  </div>

                  <h2 class="movie-card__title">${!nameRu ? nameEn : nameRu}</h2>
                  <div class="movie-card__date"> ${date}</div>
                </a>
              </article>
            </li>
         `;
};
