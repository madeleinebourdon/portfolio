
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
    let unknownColor = "#485460";

    // html5
    new Chart(document.getElementById("htmlChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#ea6228", unknownColor],
                    data: [85, 15],
                    borderWidth: 0,
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            aspectRatio: 1,
            responsive: false
        }
    });

    // css3
    new Chart(document.getElementById("cssChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#0070b7", unknownColor],
                    data: [80, 20],
                    borderWidth: 0,
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            aspectRatio: 1,
            responsive: false
        }
    });

    // js
    new Chart(document.getElementById("jsChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#f7c130", unknownColor],
                    data: [45, 55],
                    borderWidth: 0,
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            aspectRatio: 1,
            responsive: false
        }
    });

    // php
    new Chart(document.getElementById("phpChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#7377ad", unknownColor],
                    data: [55, 45],
                    borderWidth: 0,
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            aspectRatio: 1,
            responsive: false
        }
    });

    // sql
    new Chart(document.getElementById("sqlChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#ec9221", unknownColor],
                    data: [30, 70],
                    borderWidth: 0,
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            aspectRatio: 1,
            responsive: false
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

