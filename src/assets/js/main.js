
$(document).ready(function () {
    // swiper
    var swiper = new Swiper('.swiper-container', {
        mousewheel: true,
        watchOverflow: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
})


// quand on appuie sur un onglet, choisit quel carousel afficher
function portfolio(click) {
    $(".portfolio-carousel").hide();
    switch (click) {
        case "pro":
            $(".carousel-pro").show();
            break;
        case "perso":
            console.log('perso');
            break;
        case "classes":
            console.log('classes');
            break;
        default:
            console.log('ERREUR: la valeur donnée à la fonction portfolio() n\'est pas conforme.');
    }
}
