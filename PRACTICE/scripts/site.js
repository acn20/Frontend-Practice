$(function() {
    console.log('first dom ready function!');

    $('#submit').show();
    $('#age').hide();

    alert('Page loaded!');
});

$(function() {
    console.log('second dom ready function');
})

$(function() {
    console.log('third dom ready function');
});



function $(param) {
    if(typeof param == 'function') {
        // he/she wants to use this function on dom ready
        // save the function somewhere
    }
}