// inserisco prompt per scelta utente
let userChoice = prompt("Cosa giochi?")

// imposto variabili per sasso carta e forbice
const arrayScelte = ['sasso', 'carta', 'forbice']
let numeroRandom = Math.floor(Math.random() * arrayScelte.length)
const randomChoice = arrayScelte[Math.floor(Math.random() * arrayScelte.length)];

// input
if (userChoice === "sasso" && randomChoice === "carta"){
    document.getElementById("result").innerHTML = "HAI PERSO! AHAHAHA";
} else if (userChoice === "carta" && randomChoice === "forbice"){
    document.getElementById("result").innerHTML = "HAI PERSO! AHAHAHA";
} else if (userChoice === "forbice" && randomChoice === "sasso"){
    document.getElementById("result").innerHTML = "HAI PERSO! AHAHAHA";
} else if (userChoice === randomChoice){
    document.getElementById("result").innerHTML = "NON HAI NE VINTO NE PERSO MI DISPIACE!"
} else {
    document.getElementById("result").innerHTML = "HAI VINTO!";
}

// console log
console.dir(arrayScelte);
console.log("Questa è la tua scelta: " + userChoice)
console.log("Questa è la scelta del computer: " + randomChoice)