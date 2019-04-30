$(function() {
    $("#send").click(function() {
        var yourMessage = $("#typeYourMessage").val();

        //var clone = $("#templates .my-message").clone();//in elementul cu id-ul "templates" iti ia TOATE elementele cu clasa "my-message"
        var clone = $("#templates > .my-message").clone();//asa iti ia descendentii direct din elementul cu id-ul "templates" 
        clone.attr("id", null);
        clone.html(yourMessage);
        $("#chat").append(clone);
        $("#typeYourMessage").val("");
    })
})