import '../styles/main.scss';

import { createLogo, createMainContainer } from './ui';

function main() {
    const app = document.getElementById('root');

    const logo = createLogo();
    app.appendChild(logo);

    const container = createMainContainer();
    app.appendChild(container);

}

window.addEventListener('DOMContentLoaded', main);