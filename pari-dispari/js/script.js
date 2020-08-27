// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pariDispari = prompt("scegli tra pari o dispari");
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function generaNumero() {
  var numeroGenerato = Math.floor(Math.random()*5)+1;
  return numeroGenerato
}
var numeroPc = generaNumero();
// Sommiamo i due numeri
var sommaNumeri = numeroUtente + numeroPc;
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function checkpari(num){
  var numeroPari= false;
  if (num % 2 == 0){
    numeroPari = true;
  }
}
// Dichiariamo chi ha vinto.
var risultato = checkpari(sommaNumeri);
if (risultato == true && pariDispari == "pari") {
  alert("Ha vinto l'utente");
}
else if (risultato == false && pariDispari == "dispari"){
  alert("Ha vinto l'utente");
}
else{
  alert("Ha vinto il pc");
}

console.log(pariDispari);
console.log(numeroUtente);
console.log(numeroPc);
console.log(sommaNumeri);
console.log(risultato);
