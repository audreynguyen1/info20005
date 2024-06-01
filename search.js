document.addEventListener('DOMContentLoaded', function() {
    const productsPerPage = 4;
    const productCards = document.querySelectorAll('.productgrid .card');
    const paginationLinks = document.querySelectorAll('.pagination a');

    // Function to show a specific page of products
    function showPage(pageNumber) {
        const start = (pageNumber - 1) * productsPerPage;
        const end = pageNumber * productsPerPage;

        productCards.forEach((card, index) => {
            card.style.display = (index >= start && index < end) ? 'block' : 'none';
        });

        paginationLinks.forEach(link => link.classList.remove('active'));
        paginationLinks[pageNumber].classList.add('active');
    }

    // Add click event listeners to pagination links
    paginationLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (index === 0) {
                showPage(1); 
            } else if (index === paginationLinks.length - 1) {
                showPage(paginationLinks.length - 2); 
            } else {
                showPage(index);
            }
        });
    });

    showPage(1);

    // Add submit event listener to the search form
    document.getElementById('search-form').addEventListener('submit', function(e) {
        e.preventDefault(); 
        const searchInput = document.getElementById('search-input').value;
        const resultsMessage = `56 Results for "${searchInput}"`; 
        document.getElementById('search-results-message').textContent = resultsMessage;
    });
});
