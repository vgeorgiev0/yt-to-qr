const { ipcRenderer } = require("electron");

const goBtn = document.getElementById('go-btn');
const youtubeLink = document.getElementById('youtube-link');
let validUrl = null;


// Check if YouTube link is valid then unlocks the Go button.
youtubeLink.addEventListener('keyup', (event) =>{
    const url = event.currentTarget.value;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (url !== undefined || url !== '') {
        if (match && match[2].length === 11) {
            goBtn.disabled = false;
            validUrl = url;
        }
    } else {
        goBtn.disabled = true;
    }

});

goBtn.addEventListener('click', event => {
    if (validUrl) {
        const videoId = validUrl.split('=')[1];
        localStorage.setItem('videoId', videoId);
        ipcRenderer.invoke('go-button-clicked');
    }
});