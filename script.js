// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');

    // Add click event listener to the search button
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for dogs of type: ${query}`);
            // You can replace this alert with actual search functionality
        } else {
            alert('Please enter a dog type to search.');
        }
    });
});
