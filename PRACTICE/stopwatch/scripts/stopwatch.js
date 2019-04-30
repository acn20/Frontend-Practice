$(function () {
    $("#start").click(function () {
        start();
    })
    $("#pause").click(function () {
        pause();
    })
    $("#clear").click(function () {
        clear();
    })

})

var minutes = 0;
var seconds = 0;
var intervalHandler = 0;
// var milliseconds = 0; // TODO later

function start() {//returns an id
    intervalHandler = setInterval(function () {//functie definita in javascript, face parte din limbaj
        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }

        if (minutes < 10) {
            $("#minutes").html("0" + minutes);
        }
        else {
            $("#minutes").html(minutes);
        }

        if (seconds < 10) {
            $("#seconds").html("0" + seconds);
        }
        else {
            $("#seconds").html(seconds);
        }
    }, 1000);//o data la 1000 de milisecunde
}

function pause() {
    clearInterval(intervalHandler);//functie din javascript
    //opreste procesul care repeta codul din functia setInterval
}

function clear() {
    $("#minutes").html("00");
    $("#seconds").html("00");
    $("#miliseconds").html("000");

    seconds = 0;
    minutes = 0;

    clearInterval(intervalHandler);
}