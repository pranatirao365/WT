document.addEventListener('DOMContentLoaded', () => {
    loadBookCatalog();
});

function loadBookCatalog() {
    const container = document.getElementById('catalog-container');
    
    // Load the XML file using Fetch API
    fetch('book_catalog.xml')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok (${response.status})`);
            }
            return response.text();
        })
        .then(xmlString => {
            // Parse the XML text into a DOM object
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "application/xml");
            
            // Check if parsing produced an error
            const parseError = xmlDoc.getElementsByTagName("parsererror");
            if (parseError.length > 0) {
                throw new Error("Error parsing standard XML format.");
            }
            
            // Successfully parsed. Now extract & render.
            renderBooks(xmlDoc, container);
        })
        .catch(error => {
            console.error("Failed to load or parse XML:", error);
            container.innerHTML = `
                <div class="error-state">
                    <strong>Error loading book catalog:</strong><br>
                    ${error.message}<br>
                    <small>Attempting to open an XML via local explicitly? Ensure you are using a local web server, Chrome may block local file fetch requests due to CORS constraints unless launched with flags.</small>
                </div>
            `;
        });
}

function renderBooks(xmlDoc, container) {
    // Clear loading state
    container.innerHTML = '';
    
    // Get all book elements
    const books = xmlDoc.getElementsByTagName('book');
    
    if (books.length === 0) {
        container.innerHTML = '<div class="loading-state">No books found in the catalog.</div>';
        return;
    }
    
    // Iterate over each book in the XML
    Array.from(books).forEach(bookNode => {
        // Extract node values securely
        const title = getElementValue(bookNode, 'title');
        const author = getElementValue(bookNode, 'author');
        const genre = getElementValue(bookNode, 'genre');
        
        // Price and attributes
        const priceNode = bookNode.getElementsByTagName('price')[0];
        const priceValue = priceNode ? priceNode.textContent.trim() : '0';
        const currency = priceNode ? (priceNode.getAttribute('currency') || '$') : '$';
        
        const availability = getElementValue(bookNode, 'availability');
        const imgIcon = getElementValue(bookNode, 'image') || '📚';
        
        // Define dynamic badge color based on stock status
        let availabilityBadgeClass = "badge--warn";
        if (availability === "In Stock") availabilityBadgeClass = "badge--ok";
        else if (availability === "Out of Stock") availabilityBadgeClass = "badge--err";

        // Template string to dynamically build book UI card
        const bookCardHTML = `
            <div class="book-card">
                <div class="book-image">${imgIcon}</div>
                <div class="book-title">${title}</div>
                <div class="book-author">by ${author}</div>
                <div class="book-genre"><span class="badge ${getGenreBadge(genre)}">${genre}</span></div>
                
                <div class="book-pricing-row">
                    <span class="book-price">${currency}${priceValue}</span>
                    <span class="badge ${availabilityBadgeClass}">${availability}</span>
                </div>
            </div>
        `;
        
        // Inject into main container
        container.innerHTML += bookCardHTML;
    });
}

// Utility function to get direct text of an element name safely
function getElementValue(parentNode, tagName) {
    const node = parentNode.getElementsByTagName(tagName)[0];
    return node ? node.textContent.trim() : '';
}

// Utility styling
function getGenreBadge(genre) {
    switch (genre.toLowerCase()) {
        case 'technology': return 'badge--info';
        case 'science': return 'badge--ok';
        case 'fiction': return 'badge--warn';
        default: return 'badge--info';
    }
}