$(document).ready(function() {
    var counter = 0;

    $('#minusButton').addClass('hidden-element');

    $('#minusButton').click(function() {
        if(counter == 0) {
            return;
        }

        counter--;

        if(counter == 0) {
            $('#minusButton').addClass('hidden-element');
        }

        updateScreen(counter);

        $('#plusButton').removeClass('hidden-element');
    });

    $('#plusButton').click(function() {
        if(counter == 5) {
            return;
        }

        counter++;

        if(counter == 5) {
            var element = $('#plusButton');
            
            element.addClass('hidden-element');
        }

        updateScreen(counter);

        $('#minusButton').removeClass('hidden-element');
    });
});

function updateScreen(counter) {
    $('#numberSpan').html(counter);
}

