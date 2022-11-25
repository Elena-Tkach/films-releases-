// const API_KEY = 'f6598662-5fb2-443b-9c99-1f613b65616f';
const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';

const API_KEY = '7e696a52-ad00-4b4f-8615-0feda00a8a1f';

export const getListMovies = async (getOrder, getType, getRatingFrom, getRatingTo, getYearFrom, getYearTo, page) => {
  getOrder = 'RATING';
  getType = 'ALL';
  getRatingFrom = 0;
  getRatingTo = 10;
  getYearFrom = 1920;
  getYearTo = new Date().getFullYear();

  const url = `${API_URL}?order=${getOrder}
                  &type=${getType}
                  &ratingFrom=${getRatingFrom}
                  &ratingTo=${getRatingTo}
                  &yearFrom=${getYearFrom}
                  &yearTo=${getYearTo}
                  &page=${page}
              `;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    }
  });
  const result = await response.json();
  return result;
}


export const getRelisesFilms = async (currentYear, currentMonthText, page) => {
  const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/releases?year=${currentYear}&month=${currentMonthText}&page=${page}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "X-API-KEY": API_KEY,
      "Content-Type": "application/json",
    }
  });

  const result = await response.json();
  return result;

}