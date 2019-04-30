// var counties = ["AB", "AR", "AG", "BC", "BH", "BN", "B", "BT", "BR", "BV", "BZ", "CL", "CS", "CJ", "CV", "IL", "IF", "TR", "TM", "MM", "CT", "IS", "DB", "DJ", "GL", "GR", "GJ", "HR", "HD", "MH", "NT", "OT", "PH", "SM", "SJ", "SB", "SV", "TL", "VS", "VL", "VN"]
//sa validez si ca la comp de nr sunt numai nr si la cealalta numai litere
//fac o functie validate number component si una validate letter component; ambele primesc ca parametru un string (continutul acelui input) si returneaza true sau false (verific litera cu litera)
var countiesFull = {
    "AB": "Alba", "AR": "Arad", "AG": "Arges", "BC": "Bacau", "BH": "Bihor", "BN": "Bistrita-Basaud", "B": "Bucuresti", "BT": "Botosani",
    "BR": "Braila", "BV": "Brasov", "BZ": "Buzau", "CL": "Calarasi", "CS": "Caras-Severin", "CJ": "Cluj", "CV": "Covasna", "IL": "Ialomita",
    "IF": "Ilfov", "TR": "Teleorman", "TM": "Timis", "MM": "Maramures", "CT": "Constanta", "IS": "Iasi", "DB": "Dambovita", "DJ": "Dolj", "GL": "Galati", "GR": "Giurgiu", "GJ": "Gorj", "HR": "Harghita",
    "HD": "Hunedoara", "MH": "Mehedinti", "NT": "Neamt", "OT": "Olt", "PH": "Prahova", "SM": "Satu Mare", "SJ": "Salaj", "SB": "Sibiu", "SV": "Suceava", "TL": "Tulcea", "VS": "Vaslui", "VL": "Valcea", "VN": "Vrancea"
}

$(function () {

    $("#number").on('input', function () {
        if ($("#number").val().length != 3) {
            $("#number").addClass("invalid");
        }

        else {
            $("#number").removeClass("invalid");
        }
    })

    $("#letters").on('input', function () {
        if ($("#letters").val().length != 3) {
            $("#letters").addClass("invalid");
        }

        else {
            $("#letters").removeClass("invalid");
        }
    })

    $("#check").click(function () {
        // var isValidCounty = false;
        var introducedCounty = $("#region").val();

        if ($("#number").val().length != 3 || $("#letters").val().length != 3) {
            $("#message").html("Invalid plate number");
            return;//se opreste din functie
        }

        var county = countiesFull[introducedCounty];
        if (county == null) {
            $("#message").html("Invalid plate number");
            return;
        }

        $("#message").html("Valid plate number from " + county);

        // for (var i = 0; i < counties.length; i++) {
        //     if (counties[i] == introducedCounty) {
        //         $("#message").html("Valid plate number from " + countiesFull[introducedCounty]);
        //         //if (!parseInt($("#number").val())) {//parseInt incearca sa transforme un string intr-un numar
        //         //    return false
        //         //};
        //         isValidCounty = true;
        //     }
        // }

        // if(!isValidCounty) {
        //     $("#message").html("Invalid plate number");
        // }
    })
})