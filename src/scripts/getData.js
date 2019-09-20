import { container } from './App';
export function getData() {
  const fetchParams = {
    method: "GET",
    mode: "cors",
    cache: "default"
  };
  const url = "https://swapi.co/api/films/";
  fetch(url, fetchParams)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      const movies = data.results;
      movies.forEach(function (movie) {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const header = document.createElement('h2');
        header.setAttribute('class', 'card__header');
        header.textContent = movie.title;
        const description = document.createElement('p');
        description.setAttribute('class', 'card__header-description');
        description.textContent = `${movie.opening_crawl}`;
        container.appendChild(card);
        card.appendChild(header);
        card.appendChild(description);
      });
    });
}
