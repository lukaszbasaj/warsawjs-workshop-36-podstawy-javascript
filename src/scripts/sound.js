const SOUND_ON = "sound on";
const SOUND_OFF = "sound off";

export function switchSound() {
    const $btn = document.querySelector('.btn');
    const $audio = document.querySelector('.audio');

    $btn.addEventListener("click", function toggleState() {
        const currentValue = $btn.value;

        if (currentValue === SOUND_ON) {
            $btn.value = SOUND_OFF;
            $audio.play();
        } else {
            $btn.value = SOUND_ON;
            $audio.pause();
        }
    });
};