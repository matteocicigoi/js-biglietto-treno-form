'use strict';

//bottoni
const bottone = document.getElementById('genera');
const bottoneReset = document.getElementById('reset');

 // valore elementi input
 const nomeCognome = document.getElementById('nome-cognome');
 const km = document.getElementById('km');
 const eta = document.getElementById('eta');

//evento del bottone genera
bottone.addEventListener('click',
    function(){
        //prezzo
        let prezzo = km.value * 0.21;
        let sconto = 0;
        let testoSconto = 'Biglietto Standard';

        //sconto
        if(eta.value === 'minorenne'){
            sconto = 20;
            testoSconto = 'Biglietto Minorenne';
        }else if(eta.value === 'over65'){
            sconto = 40;
            testoSconto = 'Biglietto Over 65';
        }
        prezzo -= ((prezzo / 100) * sconto);

        //arrotonda a due cifre decimali
        const testo = prezzo.toFixed(2) + '€';

        /* output */
        if(nomeCognome.value !== '' && km.value !== ''){
            //se i campi nome e km non sono vuoti
            document.getElementById('nome').innerHTML = nomeCognome.value;
            document.getElementById('sconto').innerHTML = testoSconto;
            document.getElementById('numeroCarrozza').innerHTML = Math.floor(Math.random() * 30);
            document.getElementById('numeroCP').innerHTML = Math.floor(Math.random() * 10000);
            document.getElementById('prezzo').innerHTML = testo;
            const biglietto = document.getElementById('biglietto');
            biglietto.classList.remove('d-none');
            biglietto.classList.add('d-flex');
            document.getElementById('errore').classList.add('d-none');
        }else{
            //se sono vuoti
            document.getElementById('errore').classList.remove('d-none');
            biglietto.classList.remove('d-flex');
            biglietto.classList.add('d-none');

        }
    }
);

//evento del bottone reset
bottoneReset.addEventListener('click',
    function(){
        //rimuove d-block e mette d-none
        const biglietto = document.getElementById('biglietto');
        biglietto.classList.remove('d-flex');
        biglietto.classList.add('d-none');
        //aggiunge l'attributo disabled
        bottone.setAttribute('disabled', true);
    }
);

// se sono presenti nome e km toglie l'attributo disabled dal bottone
nomeCognome.addEventListener('keypress',
    function(){
        if(km.value !== ''){
            bottone.removeAttribute('disabled');
        }
    }
);
km.addEventListener('keypress',
    function(){
        if(nomeCognome.value !== ''){
            bottone.removeAttribute('disabled');
        }
    }
);
