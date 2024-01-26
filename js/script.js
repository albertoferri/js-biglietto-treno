// impostare i prompt per il numero dei km e l'età del passeggero
const range = prompt("Ciao!!, qual'è il numero di km che vuoi percorrere?");
const age = prompt("Quanti anni hai?");

// sconto young
let price = range * 0.21;

let scontoYoung = price - ((price * 20) / 100);
let prezzoYoung2ch = scontoYoung.toFixed(2);

// sconto senior
let scontoSenior = price - ((price * 40) / 100);
let prezzoSenior2ch = scontoSenior.toFixed(2);
if (age < 18){
    document.getElementById("yourWay").innerHTML = "Dato che rientri nella fascia 'Young' il prezzo della tua tratta è di: " + prezzoYoung2ch + "€";
} else if (age > 64){
    document.getElementById("yourWay").innerHTML = "Dato che rientri nella fascia 'Senior' il prezzo della tua tratta è di: " + prezzoSenior2ch + "€";
} else{
    document.getElementById("yourWay").innerHTML = "Il prezzo della tua tratta è di: " + price + "€";
}


// console log
console.log("Questo è il prezzo della tratta standard: " + price, "Prezzo young scontato: " + prezzoYoung2ch, "Prezzo young scontato: " + prezzoSenior2ch)