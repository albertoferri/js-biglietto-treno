// inserisco prompt per scelta utente
let userChoice = prompt("Cosa giochi?")

// imposto variabili per sasso carta e forbice
const arrayScelte = ['sasso', 'carta', 'forbice']
const randomChoice = arrayScelte[Math.floor(Math.random() * arrayScelte.lenght)];

console.log(randomChoice)