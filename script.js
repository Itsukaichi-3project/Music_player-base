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
// すべてのwave-barを取得してループを回す
const bars = document.querySelectorAll('.wave-bar');

bars.forEach((bar, index) => {
  // 順番に綺麗にずらす場合
  const delay = (index + 1) * 0.15;
  
  // またはランダムにしたい場合はこちら：
  // const delay = Math.random() * 0.6;

  bar.style.animationDelay = `${delay}s`;
});