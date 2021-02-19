var z = 'neuer Einsatz';
document.getElementById("missionH1").innerHTML = "" + z + "";

    $("#missionH1").click(function () {
        var rename = prompt("Einsatz anlegen",""+z+"");
    })
