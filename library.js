/*bib d'animation */

anim('body', 1);
anim('#dis', 5);
anim('#p1', 2);
anim('#p2', 3);
anim('#p3', 4);


function anim(x, n) {
    ScrollReveal().reveal(x, {
        duration: n * 1000,
        reset: true
    });
}

$(document).ready(function() {


    $('.fancybox').fancybox();

});