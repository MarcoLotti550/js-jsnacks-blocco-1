/* Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri
 dispari e in verde i numeri pari. */

 let divRed = document.createElement("div");
 divRed.setAttribute("id", "red");
 document.body.appendChild(divRed);

 let divGreen = document.createElement("div");
 divGreen.setAttribute("id", "green");
 document.body.appendChild(divGreen);
 
 let lostNumbers = [4, 8, 15, 16, 23, 42];
 
 for (i = 0; i < lostNumbers.length; i++){
   if (lostNumbers[i] % 2 != 0){
     divRed.innerHTML += lostNumbers[i] + " ";
   }else {
     divGreen.innerHTML += lostNumbers[i] + " ";
   };
 };