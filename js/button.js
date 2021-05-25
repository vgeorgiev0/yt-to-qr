const goBtn = document.getElementById('go-btn');
const youtubeLink = document.getElementById('youtube-link');

youtubeLink.addEventListener('keyup', (event) =>{
    let url = event.currentTarget.value;
    if (url != undefined || url != '') {
        let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        let match = url.match(regExp);
        if (match && match[2].length == 11)
        goBtn.disabled = false;
    } else {
        goBtn.disabled = true;
    }
});
