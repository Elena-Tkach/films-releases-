// склонение числительных
export const declOfNum = (number, titles) => {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

export const queryParamDefinition = () => {
  // определение query-параметра
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  let queryParam = params.page;

  if (!queryParam) {
    queryParam = 1;
    history.pushState(null, null, '?page=1');
  }
  return queryParam;
}