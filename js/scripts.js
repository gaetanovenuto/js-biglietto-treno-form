// Riporto il pulsante Genera su JS

const submit = document.getElementById('SubmitButton');
console.log('Submit', submit, typeof submit);

// Attivo la funzione all'invio del form
submit.addEventListener('submit', calculate());

function calculate() {

    // Salvo il valore dell'input "Nome e Cognome" dell'utente

    const userCompleteName = document.getElementById("userCompleteName").value;
    console.log("Nome e cognome dell'utente:", userCompleteName);

    // Salvo il valore dell'input "Km da percorrere" dell'utente

    const userKmInput = document.getElementById("userKmInput").value;
    console.log("I km che l'utente vuole percorrere sono:", userKmInput);

    // Imposto il prezzo fisso al km

    const FixedPrice = 0.21;
    console.log('Il prezzo fisso per km è: €', FixedPrice)
}