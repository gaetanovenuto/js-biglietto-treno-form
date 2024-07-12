// Riporto il pulsante Genera su JS

const submit = document.getElementById('SubmitButton');
console.log('Submit', submit, typeof submit);

// Attivo la funzione all'invio del form
submit.addEventListener('click',
    function() {

        // Salvo il valore dell'input "Nome e Cognome" dell'utente

        const userCompleteName = document.getElementById("userCompleteName").value;
        console.log("Nome e cognome dell'utente:", userCompleteName);

        // Salvo il valore dell'input "Km da percorrere" dell'utente

        const userKmInput = document.getElementById("userKmInput").value;
        console.log("I km che l'utente vuole percorrere sono:", userKmInput);

        // Salvo il valore dell'input "Age" dell'utente

        let userAge = document.getElementById("userAgeInput").value;
        console.log("L'utente è:", userAge);

        // Imposto il prezzo fisso al km

        const FixedPrice = 0.21;
        console.log('Il prezzo fisso per km è: €', FixedPrice);

        // Calcolo il prezzo del biglietto senza sconti

        let TicketPrice = userKmInput * FixedPrice;

        // Se l'utente imposta "Minorenne", calcolo il prezzo del biglietto con il 20% di sconto

        if (userAge === 'Minorenne') {
            TicketPrice = TicketPrice * 0.8;
            console.log('Il prezzo per i minorenni è:', TicketPrice);
        }

        // Se l'utente imposta "Over 65", calcolo il prezzo del biglietto con il 40% di sconto

        else if (userAge === 'over65') {
            TicketPrice = TicketPrice * 0.6;
            console.log('Il prezzo per gli over 65 è:', TicketPrice);
        }
    
        // Stampo nell'HTML il valore dell'input "Nome e Cognome" dell'utente

        document.getElementById('passengerName').innerHTML = userCompleteName;

        // Stampo nell'HTML il tipo del biglietto

        document.getElementById('typeTicket').innerHTML = 'Biglietto standard';

        // Genero un numero casuale tra 1 e 10

        const randomNumber1and10 = Math.random() * 10

        // Arrotondo il numero per difetto

        const FinalNumber1and10 = (Math.floor(randomNumber1and10) + 1);

        // Stampo nell'HTML il numero di carrozza

        document.getElementById('randomCarriage').innerHTML = FinalNumber1and10;

        // Genero un numero casuale tra 10000 e 99999

        const randomNumber10k = Math.random() * 100000;

        // Arrotondo il numero per difetto

        const FinalNumber10k = (Math.floor(randomNumber10k) + 1);

        // Stampo nell'HTML il numero di carrozza

        document.getElementById('randomCPCode').innerHTML = FinalNumber10k;

        // Porto a due decimali il prezzo del biglietto

        let FormatPrice = TicketPrice.toFixed(2)

        // Stampo nell'HTML il prezzo finale

        document.getElementById('TicketPrice').innerHTML = FormatPrice;
    }
)