

function playVideo() { 
    let playButton = document.getElementById("play");
    let pauseButton = document.getElementById("pause");
    let volumeButton = document.getElementById("volume");
    let muteButton = document.getElementById("mute");
    let nextButton = document.getElementById("next"); 

    playButton.addEventListener("click", function(){
        let video = document.getElementById("video");
        video.play();
        playButton.classList.add("hide");
        pauseButton.classList.remove("hide");
        
    });

    pauseButton.addEventListener("click", function(){
        let video = document.getElementById("video");
        video.pause();
        playButton.classList.remove("hide");
        pauseButton.classList.add("hide");
    });

    volumeButton.addEventListener("click", function(){
        let video = document.getElementById("video");
        video.muted = true;
        volumeButton.classList.add("hide");
        muteButton.classList.remove("hide");

    });

    muteButton.addEventListener("click", function(){
        let video = document.getElementById("video");
        video.muted = false;
        volumeButton.classList.remove("hide");
        muteButton.classList.add("hide");
    });

}

window.onload = playVideo;