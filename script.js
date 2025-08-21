document.addEventListener('DOMContentLoaded', () => {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            const productGrid = document.getElementById('product-grid');
            data.games.forEach(game => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${game.image}" alt="${game.title}">
                    <h2>${game.title}</h2>
                    <p>$${game.price.toFixed(2)}</p>
                    <button>Add to Cart</button>
                `;
                productGrid.appendChild(productCard);
            });
        });
});
