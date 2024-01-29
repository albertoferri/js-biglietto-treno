// creare prompt per inserire tre numeri
const numone = prompt("Inserisci il primo numero");
const numdue = prompt("Inserisci il secondo numero");
const numtre = prompt("Inserisci il terzo numero");

let numberone = parseFloat(numone);
let numberdue = parseFloat(numdue);
let numbertre = parseFloat(numtre);

let somma = numberone + numberdue + numbertre;

let media = somma / 3;
let media2ch = media.toFixed(2)

console.log("Questa è la tua somma: " + somma);
console.log("Questa è la tua media: " + media);

// creare media visualizzata in pagina
document.getElementById("media").innerHTML = "La tua media aritmetica è di: " + media2ch;