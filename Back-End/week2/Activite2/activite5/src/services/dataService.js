const fs = require('fs');
const path = require('path');

function loadProducts() {
    const filePath = path.join(__dirname, '..', 'data', 'products.json');
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
}

function filterProducts(query) {
    let products = loadProducts();

    // Filtre 1 : category
    if (query.category) {
        products = products.filter(p => p.category.toLowerCase() === query.category.toLowerCase());
    }

    // Filtre 2 : minPrice
    if (query.minPrice) {
        products = products.filter(p => p.price >= Number(query.minPrice));
    }

    // Filtre 3 : maxPrice
    if (query.maxPrice) {
        products = products.filter(p => p.price <= Number(query.maxPrice));
    }

    //  tri
    if (query.sort) {
        if (query.sort === "asc") {
            products.sort((a, b) => a.price - b.price);
        } else if (query.sort === "desc") {
            products.sort((a, b) => b.price - a.price);
        }
    }

    return products;
}

module.exports = { filterProducts };
