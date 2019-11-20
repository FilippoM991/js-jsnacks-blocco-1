// Facciamo scivere un numero all utente e facciamo il cubo dei primi n numeri
var numero = parseInt(prompt("Scrivi un numero"));
if (!numero) {
    console.log("NOn hai scritto un numero")
} else {
    for (var i = 1; i <= numero ; i++) {
        console.log(Math.pow(i, 3))
        // console.log(i*i*i)

    }
}
