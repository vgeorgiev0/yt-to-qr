const win = require("./main");

window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('textSend').value === '') {
        document.getElementById('btn').disabled = true;
    } else {
        document.getElementById('btn').disabled = false;
    }

});


// function ytVidId(url) {
//     var p = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;
//     return (url.match(p)) ? RegExp.$1 : false;
// }

// $('#youtube').bind("change keyup input", function() {
//     let url = $(this).val();
//     if (ytVidId(url) !== false) {
//         $('#ytlInfo').addClass('fieldok');
//     } else {
//         $('#ytlInfo').removeClass('fieldok');
//     }
// });
