function airportsService() {
    var rootURL = "http://sampleapis20180514091454.azurewebsites.net";

    this.getAirports = function (callback) {
        $.ajax(rootURL + "/api/Airports", {
            "method": "GET",
            "success": callback//functia asta va fi apelata de jQuery when it gets the response back from the server. this function requires one parameter - jQuery will call the function using the response from the server as parameter
        })
    }
}
