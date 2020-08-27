// Chiedere all’utente di inserire una parola
var parolaUtente = prompt("Inserisci una parola");



// Creare una funzione per capire se la parola inserita è palindroma
function checkpalindrome (text){
  var palcheck = false;
  var revtext = text.split("").reverse().join("");
  if (text == revtext) {
    palcheck = true
  }
  return palcheck;
}

var check = checkpalindrome(parolaUtente);

if (check == true){
  alert("la parola è palindroma");
}
else{
  alert("la parola non è palindroma");
}
