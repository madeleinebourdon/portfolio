
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

    // swiper
    var swiper = new Swiper('.swiper-container-skill', {
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
    let responsiveEnabled = false;

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
            responsive: responsiveEnabled
        }
    });

    // css3
    new Chart(document.getElementById("cssChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#0070b7", unknownColor],
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
            responsive: responsiveEnabled
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
            responsive: responsiveEnabled
        }
    });

    // bootstrap
    new Chart(document.getElementById("bootstrapChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#6d42a0", unknownColor],
                    data: [65, 35],
                    borderWidth: 0,
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            aspectRatio: 1,
            responsive: responsiveEnabled
        }
    });

    // fontawesome
    new Chart(document.getElementById("faChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#228be6", unknownColor],
                    data: [75, 25],
                    borderWidth: 0,
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            aspectRatio: 1,
            responsive: responsiveEnabled
        }
    });

    // swiper
    new Chart(document.getElementById("swiperChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#2c8dfb", unknownColor],
                    data: [40, 60],
                    borderWidth: 0,
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            aspectRatio: 1,
            responsive: responsiveEnabled
        }
    });

    // chart.js
    new Chart(document.getElementById("chartjsChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#fe809c", unknownColor],
                    data: [20, 85],
                    borderWidth: 0,
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            aspectRatio: 1,
            responsive: responsiveEnabled
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
            responsive: responsiveEnabled
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
            responsive: responsiveEnabled
        }
    });

    // phpmyadmin
    new Chart(document.getElementById("phpmaChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#f0970e", unknownColor],
                    data: [40, 60],
                    borderWidth: 0,
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            aspectRatio: 1,
            responsive: responsiveEnabled
        }
    });

    // wordpress
    new Chart(document.getElementById("wordpressChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#207196", unknownColor],
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
            responsive: responsiveEnabled
        }
    });

    // angular
    new Chart(document.getElementById("angularChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#c3002f", unknownColor],
                    data: [35, 65],
                    borderWidth: 0,
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            aspectRatio: 1,
            responsive: responsiveEnabled
        }
    });

    // ionic
    new Chart(document.getElementById("ionicChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#4c89ef", unknownColor],
                    data: [40, 60],
                    borderWidth: 0,
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            aspectRatio: 1,
            responsive: responsiveEnabled
        }
    });

    // symfony
    new Chart(document.getElementById("symfonyChart"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    backgroundColor: ["#000000", unknownColor],
                    data: [40, 60],
                    borderWidth: 0,
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            aspectRatio: 1,
            responsive: responsiveEnabled
        }
    });

        // git
        new Chart(document.getElementById("gitChart"), {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        backgroundColor: ["#e94e31", unknownColor],
                        data: [70, 30],
                        borderWidth: 0,
                    }
                ]
            },
            options: {
                tooltips: {
                    enabled: false
                },
                aspectRatio: 1,
                responsive: responsiveEnabled
            }
        });
    
        // photoshop
        new Chart(document.getElementById("photoshopChart"), {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        backgroundColor: ["#3c92e9", unknownColor],
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
                responsive: responsiveEnabled
            }
        });

        // avocode
        new Chart(document.getElementById("avocodeChart"), {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        backgroundColor: ["#00bc87", unknownColor],
                        data: [40, 60],
                        borderWidth: 0,
                    }
                ]
            },
            options: {
                tooltips: {
                    enabled: false
                },
                aspectRatio: 1,
                responsive: responsiveEnabled
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

