// Dichiaro le costanti e variabili
const userName = prompt('Inserisci Nome');
const userSurname = prompt('Inserisci Cognome');
const userFavColor = prompt('Inserisci colore preferito:')
// console.log(userName);

// Creo il messaggio di output
const userPassword = `Ciao, la tua password suggerita è: ${userName}${userSurname}${userFavColor}21`;
// console.log(userPassword);

// Output
document.getElementById('output-text').innerHTML = userPassword;