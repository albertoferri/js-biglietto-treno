// impostare i prompt per il numero dei km e l'età del passeggero
const range = prompt("Qual'è il numero di km che vuoi percorrere?");
const age = prompt("Quanti anni hai?");

let price = range * 0.21;

document.getElementById("km").innerHTML = "Il prezzo della tua tratta è di: " + price + "$";

