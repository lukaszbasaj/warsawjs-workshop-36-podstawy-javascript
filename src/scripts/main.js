import '../styles/main.scss';

import { createLogo, createMainContainer, createButton } from './ui';
import { switchSound } from './sound';

function main() {
    const app = document.getElementById('root');

    const logo = createLogo();
    app.appendChild(logo);

    const container = createMainContainer();
    app.appendChild(container);

    const button = createButton();
    container.appendChild(button);

    switchSound();
}

window.addEventListener('DOMContentLoaded', main);