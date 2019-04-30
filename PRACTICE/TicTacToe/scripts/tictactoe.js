function startGame(opts) {
    var engineOptions = new EngineOptions();
    engineOptions.setPlayer1Name(opts.player1Name);
    engineOptions.setPlayer2Name(opts.player2Name);
    engineOptions.setSize(opts.size);

    var engine = new Engine(engineOptions);
    engine.onWin(function() {
        // TODO update user interface etc
    });
}

$(function () {// same as $(document).ready(function() ...)
    $("#startBtn").click(function () {
        var player1Name = $("#player1Name").val();
        var player2Name = $("#player2Name").val();

        $("#newGameContainer").addClass("hidden");
        $("#gameContainer").removeClass("hidden");

        startGame({ "player1Name": player1Name, "player2Name": player2Name, "size": 3 });
    })
})
