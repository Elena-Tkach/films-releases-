// import { getRelisesFilms } from './getMovies';
import myJson from './db.json';
import { queryParamDefinition } from './utils';
import { months, monthsRu } from './consts';
import { renderCards, renderPagination } from './renderEls';


export const getReliseFilms = async () => {
  const yearEl = document.querySelector('.js-year');
  const monthEl = document.querySelector('.js-month');
  const errorEl = document.querySelector('.app__error');
  const queryParam = queryParamDefinition();
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentMonthText = months[currentMonth].toUpperCase();
  const currentMonthRu = monthsRu[currentMonth];

  // устанавливаем текущую дату
  yearEl.textContent = currentYear;
  monthEl.textContent = currentMonthRu;


  const initApp = async (page = 1) => {
    try {
      errorEl.style.display = 'none';
      // const result = await getRelisesFilms(currentYear, currentMonthText, page);
      const result = myJson;
      console.log(result);
      renderPagination(result);
      renderCards(result);
    }

    catch {
      errorEl.style.display = 'block';
    };
  };

  return initApp(queryParam);
}