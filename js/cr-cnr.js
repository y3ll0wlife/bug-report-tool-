$(document).ready(function() {
  $(".sidenav").sidenav();
});


$(document).ready(function() {
  $(".modal").modal();
  $("select").formSelect();
  $("textarea#trelloReport, textarea#clientVers, textarea#systemVers").characterCounter();
});

$(".dropdown-trigger").dropdown();


var intervalID = window.setInterval(myCallback, 1000);

function myCallback() {
  var x = document.getElementById("command");
  x.innerHTML = "Missing ";

  if (document.getElementById("trelloReport").value == "") x.innerHTML += "Trello Link or Report ID, ";
  if (document.getElementById("clientVers").value == "") x.innerHTML += "Client Version, ";
  if (document.getElementById("systemVers").value == "") x.innerHTML += "System Settings";

  if (x.innerHTML == "Missing ") {
    x.innerHTML = "!";
    if (document.getElementById("crOrCNR").value == 1) x.innerHTML += "canrepro ";
    else x.innerHTML += "cannotrepro ";

    x.innerHTML += document.getElementById("trelloReport").value;

    x.innerHTML += " | ";
    x.innerHTML += document.getElementById("clientVers").value;
    x.innerHTML += ", "
    x.innerHTML += document.getElementById("systemVers").value;
  }
}