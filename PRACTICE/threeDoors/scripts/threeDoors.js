/*Fă o pagină unde ai 3 uși și în spatele uneia e premiul cel mare
Alegi una, deschizi o ușă necâștigătoare
Apoi ai șansa să schimbi ușa

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
*/
$(function () {
    var doors = [
        {
            id: "1",
            win: false
        },
        {
            id: "2",
            win: false
        },
        {
            id: "3",
            win: false
        }
    ]

    var winnerDoor = Math.floor(Math.random() * (doors.length - 1 + 1));

    doors[winnerDoor].win = true;

    $(".door").click(function () {
        for (var i = 0; i < doors.length; i++) {
            if ($(this).attr("data-id") == doors[i].id) {
                if (doors[i].win == true) {
                    var leftDoors = doors.splice(winnerDoor - 1, 1);
                    var chosenByTheGameDoor = Math.floor(Math.random() * (leftDoors.length - 1 + 1));
                    for (var j = 0; j < leftDoors.length; j++) {
                        if(leftDoors[j].id == chosenByTheGameDoor) {
                            $(".message").html("This door is not a winner door");
                            $("#message").html("Do you wish to switch your door?");
                        }
                    }
                    $(".door").click(function () {
                        for (var i = 0; i < doors.length; i++) {
                            if ($(this).attr("data-id") == doors[i].id) {
                                if (doors[i].win == true) {
                                    $("#message").html("YOU WON");
                                }
                                else {
                                    $("#message").html("YOU LOST");
                                }
                            }
                        }
                    })
                }
                else {
                    var leftDoors = doors.splice(winnerDoor - 1, 1);
                    for (var j = 0; j < leftDoors.length; j++) {
                        if(leftDoors[j].id != winnerDoor) {
                            $(".message").html("This door is not a winner door");
                            $("#message").html("Do you wish to switch your door?");
                        }

                        else {
                            $(".message").html("This door is not a winner door");//aici trebuie mesajul sub usa cealalta
                            $("#message").html("Do you wish to switch your door?");
                        }
                    }

                    $(".door").click(function () {
                        for (var i = 0; i < doors.length; i++) {
                            if ($(this).attr("data-id") == doors[i].id) {
                                if (doors[i].win == true) {
                                    $("#message").html("YOU WON");
                                }
                                else {
                                    $("#message").html("YOU LOST");
                                }
                            }
                        }
                    })
                }
            }
        }
    })

    /*$(".door").click(function () {
        for (var i = 0; i < doors.length; i++) {
            if ($(this).attr("data-id") == doors[i].id) {
                if (doors[i].win == true) {
                    $("#message").html("YOU WON");
                }
                else {
                    $("#message").html("YOU GOT ONE MORE CHANCE");
                    $(".door").click(function () {
                        for (var i = 0; i < doors.length; i++) {
                            if ($(this).attr("data-id") == doors[i].id) {
                                if (doors[i].win == true) {
                                    $("#message").html("YOU WON");
                                }
                                else {
                                    $("#message").html("YOU LOST");
                                }
                            }
                        }
                    })
                }
            }
        }
    })
    */

    /*$(".door").click(function () {
        if ($(this).attr("data-id") == winnerDoor) {
            $("#message").html("YOU WON");
        }

        else {
            $("#message").html("YOU GOT ONE MORE CHANCE");

            $(".door").click(function () {
                if ($(this).attr("data-id") == winnerDoor) {
                    $("#message").html("YOU WON");
                }

                else {
                    $("#message").html("YOU LOST");
                }
            })
        }
    })*/
})