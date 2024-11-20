document.getElementById('revenue-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const price = parseFloat(document.getElementById('price').value);
    const sales = parseInt(document.getElementById('sales').value);
    const inGamePercentage = parseFloat(document.getElementById('inGamePercentage').value) / 100;
    const averageSpend = parseFloat(document.getElementById('averageSpend').value);

    const gameRevenue = price * sales;
    const inGameRevenue = sales * inGamePercentage * averageSpend;
    const totalRevenue = gameRevenue + inGameRevenue;

    // Calculate per time period
    const revenuePerYear = totalRevenue; // Total revenue is for a year
    const revenuePerMonth = totalRevenue / 12;
    const revenuePerWeek = totalRevenue / 52;
    const revenuePerDay = totalRevenue / 365;

    document.getElementById('results').innerHTML = `
        <h2>Estimated Revenue</h2>
        <p>Game Revenue: $${gameRevenue.toFixed(2)}</p>
        <p>In-Game Revenue: $${inGameRevenue.toFixed(2)}</p>
        <p>Total Estimated Revenue: $${totalRevenue.toFixed(2)}</p>
        <h3>Estimated Revenue per Time Period</h3>
        <p>Per Year: $${revenuePerYear.toFixed(2)}</p>
        <p>Per Month: $${revenuePerMonth.toFixed(2)}</p>
        <p>Per Week: $${revenuePerWeek.toFixed(2)}</p>
        <p>Per Day: $${revenuePerDay.toFixed(2)}</p>
    `;
});
