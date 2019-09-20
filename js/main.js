const year = 2019;
const month = 12;
const day = 31;

const ONE_SECOND_IN_MILLISECONDS = 1000;
const AMOUNT_OF_MS_PER_DAY = 1000 * 60 * 60 * 24;
const AMOUNT_OF_MS_PER_HOUR = 1000 * 60 * 60;
const AMOUNT_OF_MS_PER_MINUTE = 1000 * 60;

function displayRemainTime(year, month, day) {
    const chosenDate = new Date(year, month, day).getTime();
    const today = new Date().getTime();
    const diff = chosenDate - today;

    const days = Math.floor(diff / (AMOUNT_OF_MS_PER_DAY));
    const hours = Math.floor((diff % (AMOUNT_OF_MS_PER_DAY)) / (AMOUNT_OF_MS_PER_HOUR));
    const minutes = Math.floor((diff % (AMOUNT_OF_MS_PER_HOUR)) / (AMOUNT_OF_MS_PER_MINUTE));
    const seconds = Math.floor((diff % (AMOUNT_OF_MS_PER_MINUTE)) / (ONE_SECOND_IN_MILLISECONDS));

    const $days = document.querySelector('.days');
    const $hours = document.querySelector('.hours');
    const $minutes = document.querySelector('.minutes');
    const $seconds = document.querySelector('.seconds');

    $days.textContent = `${days} days`;
    $hours.textContent = `${hours} hours`;
    $minutes.textContent = `${minutes} minutes`;
    $seconds.textContent = `${seconds} seconds`;
}

function displayHeader() {
    const $header = document.querySelector('.countdown__header');
    $header.textContent = "How many days until New Year's Eve?";
}

function renderStructure($target) {
    const $days = document.createElement('div');
    $days.classList.add('days');
    $target.appendChild($days);

    const $hours = document.createElement('div');
    $hours.classList.add('hours');
    $target.appendChild($hours);

    const $minutes = document.createElement('div');
    $minutes.classList.add('minutes');
    $target.appendChild($minutes);

    const $seconds = document.createElement('div');
    $seconds.classList.add('seconds');
    $target.appendChild($seconds);

}

function main() {
    const $countdown = document.querySelector('.countdown');

    renderStructure($countdown);
    

    setInterval(() => {
        displayRemainTime(year, month, day);
    }, ONE_SECOND_IN_MILLISECONDS);
    displayHeader();

}

window.addEventListener('load', main);