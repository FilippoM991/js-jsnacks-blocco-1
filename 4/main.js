// Questa persona è sulla lista?
var listaInvitati = ["Pippo", "Pluto", "Paperino", " Minnie"];
var nome = prompt("qual è il tuo nome?");
// uso variabile sentinella, ci deve essere qualcosa che è cambiato alla fine del ciclo se il nome è stato trovato.
var nomeTrovato = false;
// false o 0 è uguale
// posso far fermare il ciclo se il nome viene trovato grazie alla sentinella
for (var i = 0; i < listaInvitati.length && (nomeTrovato == false) ; i++) {
    var nomeLista = listaInvitati[i]
    if (nome.toLowerCase() == nomeLista.toLowerCase()) {
        // per fare il confronto anche se inizialmente scritti in modo diverso
        nomeTrovato = true;
    }
}
if (!nomeTrovato) {
    console.log("Vattene");
} else {
    console.log("Entra");
}
