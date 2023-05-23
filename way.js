var stations = {
    'kovel': [
        {
            time: ['08:42', '18:20'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'kovel'
        },
    ],
    'rozhyshche': [
        {
            time: ['19:19', '19:20'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'rozhyshche'
        },
        {
            time: ['07:38', '07:40'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'rozhyshche'
        }
    ],
    'kivertsi': [
        {
            time: ['19:38', '19:58'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'kivertsi'
        },
        {
            time: ['20:59', '21:01'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'kivertsi_morning'
        },
        {
            time: ['06:01', '06:02'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'kivertsi_morning'
        },
        {
            time: ['06:54', '07:15'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'kivertsi_morning'
        }
    ],
    'lutsk': [
        {
            time: ['20:19', '20:42'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'lutsk'
        },
        {
            time: ['06:15', '06:39'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'lutsk_morning'
        }
    ],
    'rivne': [
        {
            time: ['22:20', '22:27'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'rivne_night'
        },
        {
            time: ['04:50', '04:54'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'rivne_night'
        }
    ],
    'zdolbuniv': [
        {
            time: ['22:44', '23:00'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'zdolbuniv_night'
        },
        {
            time: ['04:17', '04:33'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'zdolbuniv_night'
        }
    ],
    'ostroh': [
        {
            time: ['22:27', '22:29'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'ostroh_night'
        },
        {
            time: ['03:48', '03:50'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'ostroh_night'
        }
    ],
    'kryvyn': [
        {
            time: ['23:44', '23:46'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'kryvyn_night'
        },
        {
            time: ['03:30', '03:32'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'kryvyn_night'
        }
    ],
    'slavuta': [
        {
            time: ['23:58', '23:59'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'slavuta_night'
        },
        {
            time: ['03:16', '03:18'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'slavuta_night'
        }
    ],
    'shepetivka': [
        {
            time: ['00:23', '00:43'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            class: 'shepetivka_night'
        },
        {
            time: ['02:44', '02:54'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'shepetivka_night'
        }
    ],
    'polonne': [
        {
            time: ['01:14', '01:16'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            class: 'polonne_night'
        },
        {
            time: ['02:08', '02:10'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'polonne_night'
        }
    ],
    'pechanivka': [
        {
            time: ['01:37', '01:39'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            class: 'pechanivka_night'
        },
        {
            time: ['01:39', '01:41'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'pechanivka_night'
        }
    ],
    'chudniv_volynsky': [
        {
            time: ['02:01', '02:03'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            class: 'chudniv_volynsky_night'
        },
        {
            time: ['01:11', '01:13'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'chudniv_volynsky_night'
        }
    ],
    'berdychiv': [
        {
            time: ['02:39', '02:49'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            class: 'berdychiv_night'
        },
        {
            time: ['00:20', '00:33'],
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            class: 'berdychiv_night'
        }
    ],
    'kozyatyn': [
        {
            time: ['03:17', '03:37'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            class: 'kozyatyn_night'
        },
        {
            time: ['23:30', '23:52'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            class: 'kozyatyn_night'
        }
    ],
    'fastiv': [
        {
            time: ['04:53', '04:55'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            class: 'fastiv_night'
        },
        {
            time: ['22:04', '22:07'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            class: 'fastiv_night'
        }
    ],
    'kyiv': [
        {
            time: ['06:07', '07:20'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            class: 'kyiv_morning'
        },
        {
            time: ['07:20', '21:10'],
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            class: 'kyiv'
        }
    ],
};

var trains = {
    '088': [
        {
            days: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
            run: [
                ['00:00', '00:20', 'right'],
                ['00:33', '00:58', 'right'],
                ['01:00', '01:11', 'right'],
                ['01:13', '01:39', 'right'],
                ['01:41', '02:08', 'right'],
                ['02:10', '02:44', 'right'],
                ['02:54', '03:16', 'right'],
                ['03:18', '03:30', 'right'],
                ['03:32', '03:48', 'right'],
                ['03:50', '04:17', 'right'],
                ['04:33', '04:50', 'right'],
                ['04:54', '06:01', 'right'],
                ['06:02', '06:15', 'right'],
                ['06:39', '06:54', 'left'],
                ['07:15', '07:38', 'right'],
                ['07:40', '08:42', 'right'],
                ['18:20', '19:19', 'left'], // Kovel
                ['19:20', '19:38', 'left'],
                ['19:58', '20:19', 'right'],
                ['20:42', '20:59', 'left'],
                ['21:01', '22:20', 'left'],
                ['22:27', '22:44', 'left'],
                ['23:00', '23:27', 'left'],
                ['23:29', '23:44', 'left'],
                ['23:46', '23:59', 'left'],
            ]
        },
        {
            days: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            run: [
                ['00:01', '00:23', 'left'],
                ['00:43', '01:14', 'left'],
                ['01:16', '01:37', 'left'],
                ['01:39', '02:01', 'left'],
                ['02:03', '02:14', 'left'],
                ['02:16', '02:39', 'left'],
                ['02:49', '03:17', 'left'],
                ['03:37', '04:53', 'right'],
                ['04:55', '06:07', 'right'], // to kyiv
                ['21:10', '22:04', 'left'], // from kyiv
                ['22:07', '23:30', 'left'],
                ['23:52', '23:59', 'right'],
            ]
        }
    ]
}

checkStation();
checkTrain();
checkPeriod();

setInterval(function() {
    checkStation();
    checkTrain();
    checkPeriod();
}, 5000);

function checkStation() {
    var selectedStation = false;
    $.each(stations, function(i, elem) {
        //console.log(i); //  населений пункт
        $.each(stations[i], function(y, elem) {
            if (isAvailable(stations[i][y]['time'][0], stations[i][y]['time'][1], stations[i][y]['days'])) {
                $("#station").attr("class", stations[i][y]['class']);
                $("#game").attr('data-run', false); // фон не рухається
                selectedStation = true;
                return false;
            }
        });
        if (!selectedStation) {
            $("#station").attr("class", "");
            $("#game").attr('data-run', true); // фон рухається
        }
    });
}

function checkTrain() {
    $("#train").attr("class", "train_chs4_kyiv");
    $.each(trains, function(i, elem) {
        //console.log(i); // потяг
        $.each(trains[i], function(y, elem) {
            $.each(trains[i][y]['run'], function(x, elem) {
                if (isAvailable(trains[i][y]['run'][x][0], trains[i][y]['run'][x][1], trains[i][y]['days'])) {
                    $("#train").attr("class", "train_chs4_kyiv runtrain");
                    $('#game').attr('data-direction', trains[i][y]['run'][x][2]);
                    //console.log('yes');
                    return false;
                }
            });
        });
    });
}

function isAvailable(opening, closing, days = []) {
    var timeFormat2 = "HH:mm";
    var timeNow = moment().format("HH:mm");
    var dayNow = +moment().format('D');
    var ifTime = moment(timeNow, timeFormat2).isBetween(moment(opening, timeFormat2), moment(closing, timeFormat2));
    var ifDays = days.includes(dayNow);
    if (ifTime && ifDays) {
        return true;
    } else {
        return false;
    }
}

function checkPeriod() {
    var timeNow = moment().format("H");
    if (timeNow <= 5) {
        $("#game").attr('data-period', 'night');
    } else if (timeNow > 5 && timeNow <= 7) {
        $("#game").attr('data-period', 'morning');
    } else if (timeNow > 7 && timeNow <= 20) {
        $("#game").attr('data-period', 'day');
    } else if (timeNow > 20 && timeNow <= 22) {
        $("#game").attr('data-period', 'evening');
    } else if (timeNow > 22) {
        $("#game").attr('data-period', 'night');
    }
}