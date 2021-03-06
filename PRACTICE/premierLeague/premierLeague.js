var teams = [{
    rank: "1",
    club: "Man. City",
    MP: "37",
    W: "31",
    D: "2",
    L: "4",
    GF: "91",
    GA: "22",
    GD: "69",
    Pts: "95",
    Last5: "*****"
},
{
    rank: "2",
    club: "Liverpool",
    MP: "37",
    W: "29",
    D: "7",
    L: "1",
    GF: "87",
    GA: "22",
    GD: "65",
    Pts: "94",
    Last5: "*****"
},
{
    rank: "3",
    club: "Chelsea",
    MP: "37",
    W: "21",
    D: "8",
    L: "8",
    GF: "63",
    GA: "39",
    GD: "24",
    Pts: "71",
    Last5: "*****"
},
{
    rank: "4",
    club: "Tottenham",
    MP: "37",
    W: "23",
    D: "1",
    L: "13",
    GF: "65",
    GA: "37",
    GD: "28",
    Pts: "70",
    Last5: "*****"
},
{
    rank: "5",
    club: "Arsenal",
    MP: "37",
    W: "20",
    D: "7",
    L: "10",
    GF: "70",
    GA: "20",
    GD: "50",
    Pts: "67",
    Last5: "*****"
},
{
    rank: "6",
    club: "Man United",
    MP: "37",
    W: "19",
    D: "9",
    L: "9",
    GF: "65",
    GA: "52",
    GD: "13",
    Pts: "66",
    Last5: "*****"
},
]

function createTableRow(team) {
    // https://stackoverflow.com/questions/27311226/how-to-select-elements-from-template-with-jquery
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
    // elementul template nu exista pe pagina si d-aia nu este gasit
    let templateContent = $('#template').prop('content');
    let clone = $(templateContent).find("#tableRowTemplate").clone();
    clone.attr("id", null);
    clone.find(".club").html(team.club);
    clone.find(".mp").html(team.MP);
    clone.find(".w").html(team.W);
    clone.find(".d").html(team.D);
    clone.find(".l").html(team.L);
    clone.find(".gf").html(team.GF);
    clone.find(".ga").html(team.GA);
    clone.find(".gd").html(team.GD);
    clone.find(".pts").html(team.Pts);
    clone.find(".last5").html(team.Last5);

    return clone;
}

$(function () {
    for(let i = 0; i < teams.length; i++) {
        let tr = createTableRow(teams[i]);
        $("#scoreTable").append(tr);
    }
})