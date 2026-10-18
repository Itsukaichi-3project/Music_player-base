let audio = null;
const playButton = document.getElementById('play-button');
let isPlaying = false;
let isStarted = false;
const urlParams = new URLSearchParams(window.location.search);
const musicPath = urlParams.get('path');
function run_Music(path){
    audio = new Audio(path);
    audio.play();
    playButton.textContent = '■音声を停止';
    isPlaying = true;
    audio.addEventListener('ended', () => {
        isPlaying = false;
        isStarted = false;
        playButton.textContent = '▶音声を再生';
    });
}
function stop_Music(){
    audio.pause();
    playButton.textContent = '▶音声を再生';
    isPlaying = false;
}
playButton.addEventListener('click', () => {
    if (!isPlaying) {
        if (!isStarted) {
            isStarted = true;
            run_Music(`https://raw.githubusercontent.com/Itsukaichi-3project/Music_player-base/main/musics/${musicPath}`);
        } else {
            audio.play();
            playButton.textContent = '■音声を停止';
            isPlaying = true;
        }
    } else {
        stop_Music();
    }
});
window.addEventListener("DOMContentLoaded", () => {
    if (musicPath) {
        window.document.title = musicPath;
    }
});
window.document.title = musicPath;