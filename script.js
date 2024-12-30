const urlParams = new URLSearchParams(window.location.search);
file = urlParams.get("file");

var playing = false;
function playPause(e){
    playing = !playing;
    let playPauseBtn = document.getElementById("playPauseBtn");
    if (playing){
        playPauseBtn.classList.remove("bi-play-fill");
        playPauseBtn.classList.add("bi-pause-fill");
    } else {
        playPauseBtn.classList.remove("bi-pause-fill");
        playPauseBtn.classList.add("bi-play-fill");
    }
}

document.getElementById("playPauseBtn").addEventListener("click", playPause);