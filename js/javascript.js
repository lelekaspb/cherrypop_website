window.addEventListener("load", start);

let videoScr = document.querySelector("#videoScr");
let playBtn = document.querySelector("#playBtn");
let stopBtn = document.querySelector("#stopBtn");



function start() {
    playBtn.style.backgroundImage = "url(assets/svg/play.svg)";
    stopBtn.style.backgroundImage = "url(assets/svg/stop.svg)";

    playBtn.addEventListener("click", playVideo);
    stopBtn.addEventListener("click", stopVideo);

    // videoScr.addEventListener("loadeddata", videoInfo);


}

function playVideo() {
    console.log("playVideo");
    if (videoScr.paused == true) {
        videoScr.play();
        playBtn.style.backgroundImage = "url(assets/svg/pause.svg)";
        console.log(videoScr.paused);
        // printVideoSpeed();
    } else {
        videoScr.pause();
        playBtn.style.backgroundImage = "url(assets/svg/play.svg)";
        // printVideoSpeed();
    }
}

function stopVideo() {
    console.log("playVideo");
    videoScr.pause();
    videoScr.currentTime = 0;
    playBtn.style.backgroundImage = "url(assets/svg/play.svg)";
    // Resetting the playbackRate when the video is stopped
    videoScr.playbackRate = 1;
    // printVideoSpeed();

}



