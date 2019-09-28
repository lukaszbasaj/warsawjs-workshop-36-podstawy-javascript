import { createLogo, createMainContainer, createButton } from './ui.js';
import { switchSound } from './sound.js';

function main() {
    const app = document.getElementById('root');
    console.log('hello');

    const logo = createLogo();
    app.appendChild(logo);

    const container = createMainContainer();
    app.appendChild(container);

    const button = createButton();
    container.appendChild(button);

    switchSound();
}

window.addEventListener('DOMContentLoaded', main);