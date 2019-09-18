let { $days, $hours, $minutes, $seconds } = createDOM();

let countdown = setInterval(function () {
    const year = new Date().getFullYear();
    const choosenDate = new Date(year, 12, 31).getTime();
    const today = new Date().getTime();
    const diff = choosenDate - today;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    $days.textContent = `${days} days`;
    $hours.textContent = `${hours} hours`;
    $minutes.textContent = `${minutes} minutes`;
    $seconds.textContent = `${seconds} seconds`;

}, 1000);

function createDOM() {
    let $countdown = document.querySelector('.countdown');
    let $days = document.createElement('div');
    $days.setAttribute('class', 'days');
    let $hours = document.createElement('div');
    $hours.setAttribute('class', 'hours');
    let $minutes = document.createElement('div');
    $minutes.setAttribute('class', 'minutes');
    let $seconds = document.createElement('div');
    $seconds.setAttribute('class', 'seconds');
    document.querySelector('.countdown__header').textContent = "To New Year's Eve left:";
    $countdown.appendChild($days);
    $countdown.appendChild($hours);
    $countdown.appendChild($minutes);
    $countdown.appendChild($seconds);
    return { $days, $hours, $minutes, $seconds };
}