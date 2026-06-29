// --- 1. Header aur Footer Load karna ---
async function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    for (let el of elements) {
        const file = el.getAttribute('data-include');
        const response = await fetch(file);
        if (response.ok) el.innerHTML = await response.text();
    }
}

function setupGlobalSearch() {
    const searchInput = document.getElementById('search-bar');
    const searchBtn = document.querySelector('.search-btn');

    if (!searchInput || !searchBtn) return;

    const submitSearch = () => {
        const query = searchInput.value.trim();
        if (!query) return;
        window.location.href = `product-range.html?search=${encodeURIComponent(query)}`;
    };

    searchBtn.addEventListener('click', submitSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitSearch();
        }
    });
}

function setupResponsiveMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const dropBtn = document.querySelector('.drop-btn');
    const dropMenu = document.querySelector('.drop-menu');
    const submenuToggles = document.querySelectorAll('.menu-btn');

    if (!menu || !menuToggle) return;

    const closeAllMenus = () => {
        menu.classList.remove('active');
        if (dropMenu) dropMenu.classList.remove('show');
        submenuToggles.forEach((btn) => {
            const sub = btn.closest('.menu-title')?.querySelector('.sub-menu');
            if (sub) sub.classList.remove('pop');
        });
    };

    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        menu.classList.toggle('active');
        if (!menu.classList.contains('active') && dropMenu) {
            dropMenu.classList.remove('show');
        }
    });

    if (dropBtn && dropMenu) {
        dropBtn.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            dropMenu.classList.toggle('show');
        });
    }

    submenuToggles.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            const subMenu = btn.closest('.menu-title')?.querySelector('.sub-menu');
            if (subMenu) {
                subMenu.classList.toggle('pop');
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            closeAllMenus();
        }
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            closeAllMenus();
        });
    });
}

function renderTable(products) {
    const tableBody = document.getElementById('product-list-body');
    const labTitleElement = document.getElementById('lab-title');
    if (!tableBody) return;

    if (!products || products.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="2">No products found.</td>
            </tr>
        `;
        if (labTitleElement && !labTitleElement.innerText) {
            labTitleElement.innerText = 'No products found';
        }
        return;
    }

    tableBody.innerHTML = products.map(p => `
        <tr>
            <td>${p.productName}</td>
            <td><a href="productDetails.html?id=${p._id}">View Details</a></td>
        </tr>
    `).join('');
}

// --- 2. Index Page: Featured Products ---
async function LoadFeaturedProducts() {
    const homeGrid = document.querySelector('.product-grid');
    if (!homeGrid) return;

    try {
        const res = await fetch('/api/products/all');
        const allProducts = await res.json();

        const featuredProducts = allProducts.filter(p => p.featured === true);
        if (featuredProducts.length === 0) {
            homeGrid.innerHTML = '<p>No featured products available.</p>';
            return;
        }

        homeGrid.innerHTML = featuredProducts.map(p => `
            <div class="product-card">
                <div class="title"><h3 class="title-name">${p.labName}</h3></div>
                <img src="${p.images[0]?.url || '/image/default.png'}" alt="${p.productName}" class="p-pic">
                <p>${p.shortDesc}</p>
                <button class="product-btn"><a href="product-range.html?lab=${encodeURIComponent(p.labName)}" class="product-btn-link">View All Products</a></button>
            </div>
        `).join('');
    } catch (err) {
        console.error('Error loading products:', err);
    }
}

// --- 3. Product Range Page: Filtered List ---
async function LoadRangePage() {
    const tableBody = document.getElementById('product-list-body');
    const labTitleElement = document.getElementById('lab-title');
    if (!tableBody) return;

    const params = new URLSearchParams(window.location.search);
    const labNameFromURL = params.get('lab');
    const searchQuery = params.get('search');

    if (searchQuery && labTitleElement) {
        labTitleElement.innerText = `Search results for "${searchQuery}"`;
    } else if (labNameFromURL && labTitleElement) {
        labTitleElement.innerText = labNameFromURL;
    } else if (labTitleElement) {
        labTitleElement.innerText = 'Product Range';
    }

    try {
        if (searchQuery) {
            const response = await fetch(`/api/products/all?q=${encodeURIComponent(searchQuery)}`);
            const results = await response.json();
            renderTable(results);
            return;
        }

        const res = await fetch('/api/products/all');
        const allProducts = await res.json();

        if (labNameFromURL) {
            const filtered = allProducts.filter(p =>
                p.labName.trim().toLowerCase() === labNameFromURL.trim().toLowerCase()
            );
            renderTable(filtered);
            return;
        }

        renderTable(allProducts);
    } catch (err) {
        console.error('Error loading range page:', err);
    }
}

// --- 4. Product Details Page: Single Item ---
async function LoadProductDetails() {
    const container = document.querySelector('.details-container');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) {
        container.innerHTML = '<p>Product ID missing.</p>';
        return;
    }

    try {
        const res = await fetch(`/api/products/id/${id}`);
        const p = await res.json();

        container.innerHTML = `
            <div class="product-detail-card">
                <h1 class="lab-title">${p.productName}</h1>
                <p class="description">${p.desc}</p>
                <div class="gallery">
                    ${p.images.map(img => `
                        <div class="img-container">
                            <img src="${img.url}" alt="${img.caption}" class="ex-pic">
                            <p class="caption">${img.caption}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } catch (err) {
        console.error('Error loading product details:', err);
        container.innerHTML = '<p>Could not load product details.</p>';
    }
}

// --- 5. Initializer ---
document.addEventListener('DOMContentLoaded', async () => {
    await includeHTML();
    setupGlobalSearch();
    setupResponsiveMenu();
    await LoadFeaturedProducts();
    await LoadRangePage();
    await LoadProductDetails();
});
