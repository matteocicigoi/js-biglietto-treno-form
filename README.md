# Esercizio: Calcolo del prezzo del biglietto del treno

- variabili bottoni
- variabili input

### Bottone Genera
- prezzo: km * 0.21
- se l'età è sotto i 18
     - sconto 20%
- se l'età è sopra i 64
    - sconto 40%
- arrotonda a massimo due decimali
- se i campi nome e km non sono vuoti:
    - output
    - rimuove display none al biglietto
- se sono vuoti
    - manda un messaggio d'errore
    
### Bottone Reset
- rimuove il biglietto
- aggiunge l'attributo disabled al bottone Genera

### Evento Keypress Input (Nome Km)
- se i valori di entrambi non sono vuoti
    -  attiva il bottone Genera
