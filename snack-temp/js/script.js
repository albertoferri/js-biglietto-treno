// Ottieni l'input dall'utente utilizzando un prompt
let celsiusInput = prompt("Inserisci la temperatura in gradi Celsius:");

// Converti l'input in un numero
let celsius = parseFloat(celsiusInput);

// input per convertire da Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Controlla se l'input è un numero valido
if (isNaN(celsius)) {
    alert("Inserisci un numero valido per la temperatura in gradi Celsius.");
} else {
    let fahrenheit = celsiusToFahrenheit(celsius);

// Mostra il risultato
document.getElementById("temp").innerHTML =  (celsius + " °C sono equivalenti a " + fahrenheit.toFixed(2) + " °F.");
}