const goBtn = document.getElementById('go-btn');
const youtubeLink = document.getElementById('youtube-link');

youtubeLink.addEventListener('keyup', (event) =>{
    const value = event.currentTarget.value;
        goBtn.disabled = false;

        if (value === "") {
            goBtn.disabled = true;
        }
});