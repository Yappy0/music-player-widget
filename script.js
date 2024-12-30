const urlParams = new URLSearchParams(window.location.search);
let file = urlParams.get("file");
let files = file.split("|");
let titles = files.map(x => x.split("/")[-1])

a = new Audio();
a.src = files[0];
song = 0;
let playing = false;

function playPause(e){
    playing = !playing;
    let playPauseBtn = document.getElementById("playPauseBtn");
    if (playing){
        playPauseBtn.classList.remove("bi-play-fill");
        playPauseBtn.classList.add("bi-pause-fill");
        a.play();
    } else {
        playPauseBtn.classList.remove("bi-pause-fill");
        playPauseBtn.classList.add("bi-play-fill");
        a.pause();
    }
}

function forward(){
    song += 1;
    a.src = files[(song) % files.length];
    document.getElementById("trackTitle").innerHTML = titles[song % files.length];
    a.load();
    a.play();
}

function backward(){
    song -= 1;
    a.src = files[(song) % files.length];
    document.getElementById("trackTitle").innerHTML = titles[song % files.length];
    a.load();
    a.play();
}

document.getElementById("playPauseBtn").addEventListener("click", playPause);
document.getElementById("nextTrackBtn").addEventListener("click", forward);
document.getElementById("prevTrackBtn").addEventListener("click", backward);
a.addEventListener("ended", forward);