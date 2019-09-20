import Logo from '../../public/logo.png';

export function createLogo() {
    const logo = document.createElement('img');
    logo.setAttribute('alt', 'To jest jakieś logo');
    logo.src = `${Logo}`;
    logo.classList.add('logo');
    return logo;
}

export function createMainContainer() {
    const container = document.createElement('section');
    container.classList.add('main');
    return container;
 
}

export function createButton() {
    const button = document.createElement("input");
    button.type = "button";
    button.value = "sound";
    button.classList.add("btn");
    return button;
}

export function createMovie(movie) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const header = document.createElement('h2');
    header.setAttribute('class', 'card__header');
    header.textContent = movie.title;

    const description = document.createElement('p');
    description.classList.add('card__header-description');
    description.textContent = `${movie.opening_crawl}`;

    card.appendChild(header);
    card.appendChild(description);

    return card;
}