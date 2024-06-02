document.addEventListener('DOMContentLoaded', function() {
    const productsPerPage = 4;
    const productCards = document.querySelectorAll('.productgrid .card');
    const paginationLinks = document.querySelectorAll('.pagination a');

    // Function to display a specific page of products
    function showPage(pageNumber) {
        const start = (pageNumber - 1) * productsPerPage;
        const end = pageNumber * productsPerPage;

        productCards.forEach((card, index) => {
            if (index >= start && index < end) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        paginationLinks.forEach(link => link.classList.remove('active'));
        paginationLinks[pageNumber].classList.add('active');
    }

    // Add click event listeners to pagination links
    paginationLinks.forEach((link, index) => {
        if (index === 0) {
            link.addEventListener('click', () => showPage(1)); 
        } else if (index === paginationLinks.length - 1) {
            link.addEventListener('click', () => showPage(paginationLinks.length - 2)); 
        } else {
            link.addEventListener('click', () => showPage(index));
        }
    });

    showPage(1); 
});


  
