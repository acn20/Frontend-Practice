/*(0°C × 9/5) + 32 = 32°F
(0°F − 32) × 5/9 = -17.78°C*/
$(function () {
    /*$('#showResult').click(function() {
        var radio = $('input[name="chooseDegrees"]:checked');
        var degrees = $("#degrees").val();

        if(radio.val() == "Celsius") {
            $("#result").html(((degrees * 9 / 5) + 32) + " degrees Fahrenheit");
        }
        else {
            $("#result").html(((degrees - 32) * 5 / 9) + " degrees Celsius");
        }
    });*/


    if ($('#setUnit option[value="celsius"]:selected'.length == 1)) {
        $('#setUnit2').val("fahrenheit");
    }

    else if ($('#setUnit2 option[value="fahrenheit"]:selected').length == 1) {
        $('#setUnit').val("celsius");
    }

    $("#unitValue").keypress(function (event) {//obiect cu proprietatea key
        var key = event.key;//key reprezinta ce tasta a fost apasata
        var degrees = $("#unitValue").val() + key; // concatenate existing value with current key

        if ($('#setUnit option[value="celsius"]:selected')) {
            $("#unitValue2").val(((degrees * 1.8) + 32));
        }
        else if ($('#setUnit option[value="fahrenheit"]:selected')) {
            $("#unitValue2").val(((degrees - 32) * 5 / 9));
        }
    })

    $("#unitValue2").keydown(function (event) {
        var key = event.key;
        var degrees = $("#unitValue").val() + key;

        if ($('#setUnit2 option[value="celsius"]:selected')) {
            $("#unitValue").val(((degrees * 9 / 5) + 32));
        }

        else if ($('#setUnit2 option[value="fahrenheit"]:selected')) {
            $("#unitValue").val(((degrees - 32) * 5 / 9));
        }
    })

})