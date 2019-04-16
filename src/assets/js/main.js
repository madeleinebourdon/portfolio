
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

    // chartJS
    // html5
    new Chart(document.getElementById("htmlChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#ea6228", "#c0c0c0"],
                    data: [80, 20],
                    borderWidth: 0,
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            }
        }
    });
})

// chart
// https://www.chartjs.org/docs/latest/getting-started/integration.html#content-security-policy
var ctx = $('#skillChart');


// var myPieChart = new Chart(ctx, {
//     type: 'pie',
//     data: 
//     ,
//     options: options
// });




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

