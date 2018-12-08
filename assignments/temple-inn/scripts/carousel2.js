
var index = 1;
changeSlides(index);

function moveSlides(n) {
    changeSlides(index += n);
}

function changeSlides(n){
    var images = document.getElementsByClassName("temple-info");

    if (n > images.length) {
        index = 1;
    }
    if (n < 1) {
        index = images.length;
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    images[index - 1].style.display = "grid";
}