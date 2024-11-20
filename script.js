document.getElementById('revenue-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const price = parseFloat(document.getElementById('price').value);
    const sales = parseInt(document.getElementById('sales').value);
    const inGamePercentage = parseFloat(document.getElementById('inGamePercentage').value) / 100;
    const averageSpend = parseFloat(document.getElementById('averageSpend').value);

    const gameRevenue = price * sales;
    const inGameRevenue = sales * inGamePercentage * averageSpend;
    const totalRevenue = gameRevenue + inGameRevenue;

    document.getElementById('results').innerHTML = `
        <h2>Estimated Revenue</h2>
        <p>Game Revenue: $${gameRevenue.toFixed(2)}</p>
        <p>In-Game Revenue: $${inGameRevenue.toFixed(2)}</p>
        <p>Total Estimated Revenue: $${totalRevenue.toFixed(2)}</p>
    `;
});
