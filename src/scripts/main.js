import '../styles/main.scss';

import { createLogo, createMainContainer, createButton, createMovie } from './ui';
import { switchSound } from './sound';
import { fetchMovies } from './model';

function displayMovies(container, movies) {
    movies.forEach(function (movie) {
        const card = createMovie(movie);
        container.appendChild(card);
    });
}

function main() {
    const app = document.getElementById('root');

    const logo = createLogo();
    app.appendChild(logo);

    const container = createMainContainer();
    app.appendChild(container);

    const button = createButton();
    container.appendChild(button);

    switchSound();

    fetchMovies()
        .then((movies) => {
            displayMovies(container, movies);
        });
}

window.addEventListener('DOMContentLoaded', main);