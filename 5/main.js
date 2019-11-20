// Crea array e inserisci numeri dispari
var nomi = [];
for (var i = 0; i < 6; i++) {
    var numeroUtente = parseInt(prompt("Scrivi un numero"))
    var resto = numeroUtente % 2;
    if (resto != 0) {
        nomi.push(numeroUtente);
    }
}
console.log(nomi);
