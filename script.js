async function loadProducts() {
    const productGrid = document.getElementById('product-grid');
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

  products.forEach((product) =>{
    const productElement= document.createElement('div');

    productElement.classList.add('product');

    productElement.innerHTML = `
     <img src="${product.image}" alt="${product.title}">
     <h2>${product.title}</h2>
     <p>${product.description}</p>
     <p>Price: $${product.price}</p>
    `;

    productGrid.appendChild(productElement);
  })
}
document.addEventListener
('DOMContentLoaded', loadProducts);
