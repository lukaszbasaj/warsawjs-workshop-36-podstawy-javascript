import Logo from '../../public/logo.png';

const container = createDOM();

function createDOM() {
  const app = document.getElementById('root');
  const logo = document.createElement('img');
  logo.setAttribute('class', 'logo');
  logo.setAttribute('alt', 'logo');
  const container = document.createElement('section');
  container.setAttribute('class', 'main');
  logo.src = `${Logo}`;
  app.appendChild(logo);
  app.appendChild(container);
  return container;
}

function createButton() {
  let button = document.createElement("input");
  button.type = "button";
  button.value = "Sound";
  button.onclick = "click";
  button.className = "btn";
  container.appendChild(button);
}

function switchSound() {
  document.querySelector('.btn').addEventListener("click", function onoff() {
    let currentValue = document.querySelector('.btn').value;
    if (currentValue == "sound on") {
      document.querySelector('.btn').value = "sound off";
      document.querySelector('.audio').play();
    }
    else {
      document.querySelector('.btn').value = "sound on";
      document.querySelector('.audio').pause();
    }
  });
};


function getData() {
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




createButton();
switchSound();
getData();
