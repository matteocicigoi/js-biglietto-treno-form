'use strict';

//bottone
const bottone = document.querySelector('button');

//evento del bottone
bottone.addEventListener('click',
    function(){
        // valore elementi input
        const km = document.getElementById('km').value;
        const eta = document.getElementById('eta').value;

        //prezzo
        let prezzo = km * 0.21;
        let sconto = 0;

        //sconto
        if(eta < 18){
            sconto = 20;
        }else if(eta >= 65){
            sconto = 40;
        }
        prezzo -= ((prezzo / 100) * sconto);

        //arrotonda a due cifre decimali
        const testo = 'Prezzo: ' + prezzo.toFixed(2) + '€';

        //output
        console.log(testo);
        document.getElementById('risultato').innerHTML = testo;
    }
);