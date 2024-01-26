// impostare i prompt per il numero dei km e l'età del passeggero
const range = prompt("Qual'è il numero di km che vuoi percorrere?");
const age = prompt("Quanti anni hai?");
// const range = 21
// const age = 18

let price = range * 0.21;

let scontoBambini = price - ((price * 20) / 100);

let prezzoBambini2ch = scontoBambini.toFixed(2);

if (age < 18){
    document.getElementById("km").innerHTML = "Dato che rientri nella fascia 'Young' il prezzo della tua tratta è di: " + prezzoBambini2ch + "$";
} else{
    document.getElementById("km").innerHTML = "Il prezzo della tua tratta è di: " + price + "$";
}


// let scontoSenior = price - (price * 40 / 100)
// if (age > 64){
//     document.getElementById("km").innerHTML = scontoSenior;
// } else{
//     document.getElementById("km").innerHTML = price;
// }

console.log(price, scontoBambini)