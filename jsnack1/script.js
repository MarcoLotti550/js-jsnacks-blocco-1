/* Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino 
a quando la somma degli elementi è minore di 50. */

let numeriInseriti = []
let i = 0;
let sum = 0;

do {
  let n = parseInt(prompt("Inserisci un numero"));
  numeriInseriti.push(n);
  sum += numeriInseriti[i];
  i++;
}
while (sum < 50);

console.log(sum);