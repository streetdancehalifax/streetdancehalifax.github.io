function shuffleListItems() {
    // 1. Get the parent <ul> element.
    const list = document.getElementById('dancers-list');
    
    // 2. Get all the <li> children as a NodeList and convert to an Array.
    const items = Array.from(list.children);
    
    // 3. Shuffle the array using the Fisher-Yates (Durstenfeld) algorithm.
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]]; // Swap elements
    }
    
    // 4. Clear the existing list and re-append the shuffled items.
    list.innerHTML = ''; // Remove all existing children
    items.forEach(item => list.appendChild(item)); // Append shuffled items
}

// Run the function when the page loads or reloads.
window.onload = shuffleListItems;
