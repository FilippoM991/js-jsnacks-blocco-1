// Stampa le potenze di 2 fino al 100
var potenzeDue = 0;
for (var i = 0; potenzeDue < 1000; i++) {
    var potenzeDue = Math.pow(2, i)
    if (potenzeDue < 1000) {
        console.log(potenzeDue);
    }
}
// alternativa se si conosce la i massima
// for (var i = 0; i<10; i++) {
//     var potenzeDue = Math.pow(2, i)
//         console.log(potenzeDue);
// }


// Versione più pulita!!!!!!!!

// var potenza = 1
// while (potenza < 1000) {
//     console.log(potenza);
//     potenza = potenza * 2;
// }
