// Chiedere all’utente di inserire una parola
var parolaUtente = prompt("Inserisci una parola");



// Creare una funzione per capire se la parola inserita è palindroma
var arrayParola = [];

for (i=0; i<parolaUtente.length; i++) {
  arrayParola.push(parolaUtente.charAt(i))
}
console.log(arrayParola);
