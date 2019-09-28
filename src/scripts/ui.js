export function createLogo() {
    const logo = document.createElement('img');
    logo.setAttribute('alt', 'To jest jakieś logo');
    logo.src = `../../public/logo.png`;
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