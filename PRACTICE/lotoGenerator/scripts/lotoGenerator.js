

// [0, 1) -> x 49 -> [0, 49) + 1 => [0, 50)

$(function () {
    $("#generateButton").click(function () {
        $("#generatedNumbers").html("");
        var numbers = generateNumbers(1, 49, 6);

        for(var i = 0; i < numbers.length; i++) {
            var span = createSpan(numbers[i]);

            $("#generatedNumbers").append(span);
        }
    })

    function createSpan(number) {
        var span = $("<span />");
        span.addClass("number");
        span.html(number);

        return span;
    }
})

/*
ALTERNATIVE LOOPS

        for(;number.length < 6;) {
            var x = getRandomIntInclusive(1, 49);
            if (numbers.indexOf(x) == -1) {
                numbers.push(x);
            }
        }

        for(;;) {//infinite loop
            var x = getRandomIntInclusive(1, 49);
            if (numbers.indexOf(x) == -1) {
                numbers.push(x);
            }

            if(numbers.length == 6)
                break;
        }

        

        while(true) { //infinite loop
            var x = getRandomIntInclusive(1, 49);
            if (numbers.indexOf(x) == -1) {
                numbers.push(x);
            }

            if(numbers.length == 6)
                break;
        }
*/