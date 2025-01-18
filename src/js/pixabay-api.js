const API_KEY = '48291953-85546cde0c7bc9cda0531770b';

export function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error('No images found');
      }
      return data.hits;
    });
}
