function performSearch() {
    const query = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('results');

    if (query.trim() === '') {
        resultsDiv.innerHTML = `<p>Please enter a search term.</p>`;
        return;
    }

    // Simple simulated result
    resultsDiv.innerHTML = `
        <p>You searched for: <strong>${query}</strong></p>
        <p>Feature under development...</p>
    `;
}
