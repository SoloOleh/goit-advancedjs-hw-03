const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '46451021-7873f1dc2ed25ef257fef9075';

//* v1
// function getPhotos(query) {
//   return fetch(
//     `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
//   ).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }

//     return res.json();
//   });
// }

// export { getPhotos };

//* v2
function getPhotos(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
}

export { getPhotos };

//* v3
// function getPhotos(query) {
//   return fetch(`${BASE_URL}/${ENDPOINT}?query=${query}`, {
//     headers: {
//       Authorization: `Client-ID ${API_KEY}`,
//     },
//   }).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }

//     return res.json();
//   });
// }
