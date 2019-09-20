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
