import Logo from '../../public/logo.png';
import { getData } from './getData';

export const container = createDOM();

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
  button.value = "sound";
  button.onclick = "click";
  button.className = "btn";
  container.appendChild(button);
}

function switchSound() {
  document.querySelector('.btn').addEventListener("click", function toggleState() {
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


createButton();
switchSound();
getData();
