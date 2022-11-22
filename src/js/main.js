'use strict';
import { getListMovies } from "./getMovies.js";

const appListEl = document.querySelector('.app__list');

export const createCardsMovie = async () => {
  const movies = await getListMovies();
  console.log(movies);
  const total = movies.total;
  // const pages = Math.ceil(total / 10);

  console.log(total / 8);


  // img.map(img => {

  //   var options = {
  //     year: 'numeric',
  //     month: 'numeric',
  //     day: 'numeric'
  //   };
  //   const dateCreate = new Date(img.created_at).toLocaleDateString('ru-Ru', options);


  //   appListEl.insertAdjacentHTML('afterbegin', `

  //    <li class="app__list-item">
  //         <article class="app__card movie-card">
  //           <a href="${img.links.html}" class="movie-card__link" target="_blank">
  //             <div class="movie-card__image-wrap">
  //               <img src="${img.urls.regular}" alt="" loading="lazy" class="movie-card__image">

  //               <div class="movie-card__hover">
  //                 <div class="movie-card__rating">${img.user.name}</div>
  //                 <div class="movie-card__genres">${dateCreate}</div>
  //                 <div class="movie-card__duration">${img.likes}</div>
  //               </div>
  //             </div>
  //           </a>
  //         </article>
  //       </li> 

  //   `)
  // })
}
createCardsMovie();


// (async function () {
// }());

// // определение query-параметра
// const params = new Proxy(new URLSearchParams(window.location.search), {
//   get: (searchParams, prop) => searchParams.get(prop),
// });


// const API_KEY = 'yro4rc085VPT-ax_8xCreqOeL_EPa5Cxd1FwDtsdi9A';


// const initApp = (page = 8, query = 'color') => {
//   const url = `https://api.unsplash.com/photos/?client_id=${API_KEY}&query=${query}&per_page=${page}`;
//   console.log(url)

//   fetch(url)
//     .then(data => {

//       return data.json();
//     })
//     .then(data => {
//       console.log(data);
//       data.forEach(imgs => {
//         const f = imgs.urls.regular;
//         console.log(f);
//         // for (let value of Object.entries(imgs.urls)[2]) {
//         //   console.log(value);
//         //   return value;
//         // }

//       });

//     })
// }
// initApp();