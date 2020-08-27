// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pariDispari = prompt("scegli tra pari o dispari");
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function generaNumero() {
  var numeroGenerato = Math.floor(Math.random()*5)+1;
  return numeroGenerato
}
var numeroPc = generaNumero();
console.log(numeroPc);
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
