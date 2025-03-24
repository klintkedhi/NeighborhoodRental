function searchCity() {
    const city = document.getElementById('searchCity').value;
    const results = document.getElementById('cityResults');
    results.innerHTML = `<h2>Risultati per: ${city}</h2>`;
    // Aggiungi qui il codice per mostrare i posti da visitare
}
