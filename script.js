const urlParams = new URLSearchParams(window.location.search);
file = urlParams.get("file");

var playing = false;
function playPause(e){
    playing = !playing;
    alert(playing);
}

document.getElementById("playPauseBtn").addEventListener("click", playPause);