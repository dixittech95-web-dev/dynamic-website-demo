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
        window.location.href = `product.html?search=${encodeURIComponent(query)}`;
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
        if (dropMenu) {
            dropMenu.classList.remove('show');
            dropBtn?.classList.remove('open');
        }
        submenuToggles.forEach((btn) => {
            const sub = btn.closest('.menu-title')?.querySelector('.sub-menu');
            if (sub) {
                sub.classList.remove('pop');
            }
            btn.classList.remove('open');
        });
    };

    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        menu.classList.toggle('active');
        if (!menu.classList.contains('active') && dropMenu) {
            dropMenu.classList.remove('show');
            dropBtn?.classList.remove('open');
        }
    });

    if (dropBtn && dropMenu) {
        dropBtn.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            dropMenu.classList.toggle('show');
            dropBtn.classList.toggle('open');
        });
    }

    submenuToggles.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            const subMenu = btn.closest('.menu-title')?.querySelector('.sub-menu');
            if (subMenu) {
                subMenu.classList.toggle('pop');
                btn.classList.toggle('open');
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

function setupCategoryLinks() {
    document.querySelectorAll('.cat-link').forEach((link) => {
        const category = link.getAttribute('data-category');
        if (category) {
            link.setAttribute('href', `product.html?category=${encodeURIComponent(category)}`);
        }
    });

    const exploreBtn = document.querySelector('.category-btn a');
    if (exploreBtn) {
        exploreBtn.setAttribute('href', 'product.html');
    }
}

function initHeroSlider() {
    const hero = document.querySelector('.hero');
    const slideTrack = hero?.querySelector('.slide');
    if (!hero || !slideTrack) return;

    const slides = Array.from(slideTrack.children).filter((child) => child.tagName === 'IMG');
    if (slides.length < 2) return;

    let currentIndex = 0;
    let autoplayId = null;

    const controls = document.createElement('div');
    controls.className = 'hero-controls';
    controls.innerHTML = `
        <button class="hero-arrow hero-prev" type="button" aria-label="Previous slide">&#10094;</button>
        <div class="hero-dots"></div>
        <button class="hero-arrow hero-next" type="button" aria-label="Next slide">&#10095;</button>
    `;
    hero.appendChild(controls);

    const dotsContainer = controls.querySelector('.hero-dots');
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'hero-dot';
        dot.type = 'button';
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
            startAutoplay();
        });
        dotsContainer.appendChild(dot);
    });

    const updateSlider = () => {
        slideTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        controls.querySelectorAll('.hero-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    const goToSlide = (index) => {
        currentIndex = (index + slides.length) % slides.length;
        updateSlider();
    };

    const nextSlide = () => goToSlide(currentIndex + 1);
    const prevSlide = () => goToSlide(currentIndex - 1);

    const startAutoplay = () => {
        clearInterval(autoplayId);
        autoplayId = setInterval(nextSlide, 5000);
    };

    const stopAutoplay = () => {
        clearInterval(autoplayId);
    };

    controls.querySelector('.hero-prev').addEventListener('click', () => {
        prevSlide();
        startAutoplay();
    });

    controls.querySelector('.hero-next').addEventListener('click', () => {
        nextSlide();
        startAutoplay();
    });

    hero.addEventListener('mouseenter', stopAutoplay);
    hero.addEventListener('mouseleave', startAutoplay);
    controls.addEventListener('mouseenter', stopAutoplay);
    controls.addEventListener('mouseleave', startAutoplay);

    updateSlider();
    startAutoplay();
}

// --- 2. Index Page: Featured Products ---
async function LoadFeaturedProducts() {
    const currentPage = window.location.pathname.split('/').pop().toLowerCase();
    if (currentPage === 'product.html' || currentPage === 'productdetails.html') return;

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
                <img src="${p.images[0]?.url || '/image/default.png'}" alt="${p.productName}" loading="lazy" class="p-pic">
                <p>${p.shortDesc}</p>
                <button class="product-btn"><a href="productDetails.html?lab=${encodeURIComponent(p.labName)}" class="product-btn-link">View All Products</a></button>
            </div>
        `).join('');
    } catch (err) {
        console.error('Error loading products:', err);
    }
}

// --- 3. Product Page: Filtered list, search results, and product details ---
async function fetchSearchResults(query) {
    const res = await fetch(`/api/products/search?q=${encodeURIComponent(query)}`);
    if (!res.ok) throw new Error('Search request failed');
    return res.json();
}

function normalizeCategory(value = '') {
    return String(value).trim().toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function categoryMatchesSelection(productCategory, selectedCategory) {
    if (!selectedCategory) return true;

    const productNorm = normalizeCategory(productCategory);
    const selectedNorm = normalizeCategory(selectedCategory);

    if (!productNorm || !selectedNorm) return false;

    const aliases = {
        mechanical: ['mechanical'],
        civil: ['civil', 'civilengineering'],
        electrical: ['electrical', 'electricalengineering'],
        medical: ['medical', 'hospital', 'hospitalmedical', 'medicalengineering']
    };

    const selectedAliases = aliases[selectedNorm] || [selectedNorm];

    return selectedAliases.some((alias) => {
        return productNorm === alias || productNorm.includes(alias) || alias.includes(productNorm);
    });
}

function getCategoryTitle(category) {
    const normalized = normalizeCategory(category);
    const titles = {
        mechanical: 'Mechanical Engineering',
        civil: 'Civil Engineering',
        civilengineering: 'Civil Engineering',
        electrical: 'Electrical Engineering',
        electricalengineering: 'Electrical Engineering',
        medical: 'Hospital & Medical',
        hospital: 'Hospital & Medical',
        hospitalmedical: 'Hospital & Medical',
        medicalengineering: 'Hospital & Medical'
    };
    return titles[normalized] || 'Products';
}

function isFeaturedProduct(product) {
    return product?.featured === true || String(product?.featured).toLowerCase() === 'true';
}

function renderProductCards(products, mode = 'card') {
    const isDetailPage = /productdetails\.html$/i.test(window.location.pathname);

    if (mode === 'detail' || isDetailPage) {
        return products.map((p) => `
            <div class="product-page">
                <p class="p-lab">Lab: ${p.labName}</p>
                <h3 class="p-name">${p.productName}</h3>
                <p class="description">${p.desc}</p>
                <div class="gallery">
                    ${p.images?.map(img => `
                        <div class="img-container">
                            <img src="${img.url}" loading="lazy" class="ex-pic" alt="${p.productName}">
                            <p>${img.caption || ''}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    return products.map((p) => `
        <div class="product-card">
            <div class="title"><h3 class="title-name">${p.labName}</h3></div>
            <img src="${p.images?.[0]?.url || '/image/default.png'}" alt="${p.productName}" loading="lazy" class="p-pic">
            <p class="description">${p.shortDesc}</p>
            <button class="product-btn"><a href="productDetails.html?lab=${encodeURIComponent(p.labName)}" class="product-btn-link">View Details</a></button>
        </div>
    `).join('');
}

async function loadLabProducts(container, labName) {
    const res = await fetch('/api/products/all');
    const allProducts = await res.json();
    const filtered = allProducts.filter(p => p.labName === labName);

    const title = document.getElementById('lab-title');
    if (title) {
        title.innerText = labName;
    }

    if (filtered.length === 0) {
        container.innerHTML = `<p class="no-results">No products found for "${labName}".</p>`;
        return;
    }

    container.innerHTML = renderProductCards(filtered, 'detail');
}

async function loadSearchResults(container, query) {
    const title = document.getElementById('lab-title');
    if (title) {
        title.innerText = `Search results for "${query}"`;
    }

    const results = await fetchSearchResults(query);
    if (!results || results.length === 0) {
        container.innerHTML = `<p class="no-results">No products found for "${query}".</p>`;
        return;
    }

    container.innerHTML = renderProductCards(results, 'detail');
}

async function loadProductsByFilter(container, category) {
    const res = await fetch('/api/products/all');
    const allProducts = await res.json();
    const filtered = allProducts.filter((p) => {
        if (!isFeaturedProduct(p)) return false;
        if (!category) return true;
        return categoryMatchesSelection(p.category, category);
    });

    const title = document.getElementById('lab-title');
    if (title) {
        title.innerText = category ? `${getCategoryTitle(category)} Featured Labs` : 'All Featured Labs';
    }

    if (filtered.length === 0) {
        container.innerHTML = `<p class="no-results">No featured labs found for this category.</p>`;
        return;
    }

    container.innerHTML = renderProductCards(filtered, 'card');
}

async function LoadCatalog() {
    const container = document.getElementById('catalog-container') || document.querySelector('.product-grid');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const labName = params.get('lab');
    const searchQuery = params.get('search');
    const category = params.get('category');

    try {
        if (searchQuery) {
            await loadSearchResults(container, searchQuery);
            return;
        }

        if (labName) {
            await loadLabProducts(container, labName);
            return;
        }

        await loadProductsByFilter(container, category);
    } catch (error) {
        console.error('Error loading products:', error);
        container.innerHTML = `<p class="error-text">Failed to load products. Please try again.</p>`;
    }
}
// enquiery form
const form = document.getElementById('enquiry-form');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            mobile: document.getElementById('mobile').value,
            message: document.getElementById('msg').value
        };

        const response = await fetch('/api/send-enquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (result.success) {
            alert("Success! Message humein mil gaya hai.");
            form.reset();
        } else {
            alert("Error! Kuch gadbad ho gayi, baad mein try karo.");
        }
    });
}
// --- 5. Initializer ---
document.addEventListener('DOMContentLoaded', async () => {
    await includeHTML();
    setupGlobalSearch();
    setupResponsiveMenu();
    setupCategoryLinks();
    initHeroSlider();
    await LoadCatalog();
    await LoadFeaturedProducts();
});
