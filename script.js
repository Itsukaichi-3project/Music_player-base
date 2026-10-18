let audio = null;
const playButton = document.getElementById('play-button');
let isPlaying = false;
const urlParams = new URLSearchParams(window.location.search);
const musicPath = urlParams.get('path');
function run_Music(path){
    audio = new Audio(path);
    audio.play();
    playButton.textContent = '■音声を停止';
    isPlaying = true;
}
function stop_Music(){
    audio.pause();
    playButton.textContent = '▶音声を再生';
    isPlaying = false;
}
playButton.addEventListener('click', () => {
    if (!isPlaying) {
        run_Music(`https://raw.githubusercontent.com/Itsukaichi-3project/Music_player-base/main/musics/${musicPath}`);
    } else {
        stop_Music();
    }
});
window.addEventListener("DOMContentLoaded", () => {
    if (musicPath) {
        window.document.title = musicPath;
    }
});