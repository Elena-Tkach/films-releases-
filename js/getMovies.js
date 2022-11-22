// export const getImageData = async () => {
//   const API_KEY = 'KdT4e5cukzJ7sWMNqitIlKCsz_1FFcktSmElOcV0tvg';
//   const API_URL = `https://api.unsplash.com/photos/`;
//   const query = 'dogs';

//   const response = await fetch(
//     `${API_URL}/?client_id=${API_KEY}&per_page=8&query=${query}`
//   );

//   // var request = new XMLHttpRequest();
//   // request.open('GET', url);

//   const result = await response.json();
//   console.log(result);
//   return result;

// }

export const getListMovies = async () => {
  const API_KEY = 'f6598662-5fb2-443b-9c99-1f613b65616f';
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${currentYear}&month=JANUARY`;
  const url1 = `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`;


  const response = await fetch(url1, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    }
  });
  const result = await response.json();


  return result;
}