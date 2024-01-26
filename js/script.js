// impostare i prompt per il numero dei km e l'età del passeggero
const range = prompt("Qual'è il numero di km che vuoi percorrere?");
const age = prompt("Quanti anni hai?");
// const range = 21
// const age = 18

let price = range * 0.21;

let scontoYoung = price - ((price * 20) / 100);
let prezzoYoung2ch = scontoYoung.toFixed(2);

if (age < 18){
    document.getElementById("km").innerHTML = "Dato che rientri nella fascia 'Young' il prezzo della tua tratta è di: " + prezzoYoung2ch + "$";
} else{
    document.getElementById("km").innerHTML = "Il prezzo della tua tratta è di: " + price + "$";
}


let scontoSenior = price - ((price * 40) / 100);
let prezzoSenior2ch = scontoSenior.toFixed(2);

if (age > 64){
    document.getElementById("km").innerHTML = "Dato che rientri nella fascia 'Senior' il prezzo della tua tratta è di: " + prezzoSenior2ch + "$";
} else{
    document.getElementById("km").innerHTML = "Il prezzo della tua tratta è di: " + price + "$";
}

console.log("Questo è il prezzo della tratta standard: " + price, "Prezzo young scontato: " + prezzoYoung2ch, "Prezzo young scontato: " + prezzoSenior2ch)