function escapeHtml(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

async function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    for (const el of elements) {
        const file = el.getAttribute('data-include');
        const response = await fetch(file);
        if (response.ok) {
            el.innerHTML = await response.text();
        }
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

function getThumbnail(product) {
    return product?.image?.url || product?.images?.url || product?.path?.url || '/image/logo.png';
}

function getPdfUrl(product) {
    return product?.pdfpath?.url || product?.path?.url || '';
}

function isPdfUrl(url) {
    return /\.pdf$/i.test(url || '');
}

function isMobileView() {
    return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '');
}

function getAbsoluteUrl(url) {
    if (!url) return '';
    if (/^https?:\/\//i.test(url)) return url;
    if (url.startsWith('/')) return `${window.location.origin}${url}`;
    return url;
}

function isSameOriginUrl(url) {
    try {
        return new URL(url, window.location.href).origin === window.location.origin;
    } catch (error) {
        return false;
    }
}

function getCataloguePreviewUrl(url) {
    const absoluteUrl = getAbsoluteUrl(url);
    if (!absoluteUrl) return '';

    if (isMobileView() && isPdfUrl(absoluteUrl) && !isSameOriginUrl(absoluteUrl)) {
        return `https://docs.google.com/viewer?embedded=true&url=${encodeURIComponent(absoluteUrl)}`;
    }

    return absoluteUrl;
}

function buildProductCard(product) {
    const imageUrl = getThumbnail(product);
    const pdfUrl = getPdfUrl(product);

    return `
        <article class="product-card">
            <div class="title"><h2 class="title-name">${escapeHtml(product.labName || 'Lab')}</h2></div>
            <img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(product.labName || 'Lab')}" class="p-pic">
            <p class="description">${escapeHtml(product.shortDesc || '')}</p>
            <div class="product-actions">
                <button class="product-btn" type="button" data-action="view" data-id="${escapeHtml(product._id || '')}" data-lab="${escapeHtml(product.labName || '')}">
                    <span class="product-btn-link">View Catalogue</span>
                </button>
                <button class="product-btn download-btn" type="button" data-action="download" data-pdf="${escapeHtml(pdfUrl)}" data-name="${escapeHtml(product.labName || 'catalogue.pdf')}">
                    <span class="product-btn-link">Download Catalogue</span>
                </button>
            </div>
        </article>
    `;
}

function attachProductCardActions(container) {
    container.querySelectorAll('[data-action]').forEach((button) => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            if (action === 'view') {
                const id = button.getAttribute('data-id');
                const lab = button.getAttribute('data-lab');
                const target = id ? `productDetails.html?id=${encodeURIComponent(id)}` : `productDetails.html?lab=${encodeURIComponent(lab || '')}`;
                window.location.href = target;
            }

            if (action === 'download') {
                const pdf = button.getAttribute('data-pdf');
                const name = button.getAttribute('data-name') || 'catalogue.pdf';
                if (!pdf) return;
                const link = document.createElement('a');
                link.href = pdf;
                link.download = name;
                link.target = '_blank';
                link.click();
            }
        });
    });
}

async function renderProducts(products, container, titleText) {
    if (!container) return;
    container.innerHTML = '';

    if (!products.length) {
        container.innerHTML = '<p class="empty-state">No labs found for this search.</p>';
        return;
    }

    const fragment = document.createDocumentFragment();
    products.forEach((product) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = buildProductCard(product);
        fragment.appendChild(wrapper.firstElementChild);
    });

    container.appendChild(fragment);
    attachProductCardActions(container);

    const titleEl = document.getElementById('lab-title');
    if (titleEl) {
        titleEl.textContent = titleText;
    }
}

async function loadProductsPage() {
    const container = document.querySelector('.product-grid');
    const titleEl = document.getElementById('lab-title');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const search = params.get('search')?.trim() || '';
    const category = params.get('category')?.trim() || '';

    let url = '/api/products/all';
    const query = new URLSearchParams();
    if (search) query.set('q', search);
    if (category) query.set('category', category);

    if (query.toString()) {
        url = `/api/products/all?${query.toString()}`;
    }

    try {
        const response = await fetch(url);
        const products = await response.json();
        const safeProducts = Array.isArray(products) ? products : [];
        const filteredProducts = category
            ? safeProducts.filter((product) => (product.category || '').toLowerCase().includes(category.toLowerCase()))
            : safeProducts;

        const titleText = search ? `Search results for “${search}”` : category ? `${category.charAt(0).toUpperCase()}${category.slice(1)} Labs` : 'All Labs';
        if (titleEl) {
            titleEl.textContent = titleText;
        }
        renderProducts(filteredProducts, container, titleText);
    } catch (error) {
        console.error('Failed to load products:', error);
        if (container) {
            container.innerHTML = '<p class="empty-state">Unable to load labs right now.</p>';
        }
    }
}

async function loadFeaturedProducts() {
    const container = document.querySelector('.featured-product');
    if (!container) return;

    try {
        const response = await fetch('/api/products/featured');
        const products = await response.json();
        const safeProducts = Array.isArray(products) ? products : [];
        const featuredProducts = safeProducts.slice(0, 3);
        renderProducts(featuredProducts, container, 'Featured Labs');
    } catch (error) {
        console.error('Failed to load featured products:', error);
    }
}

async function loadProductDetailsPage() {
    const container = document.getElementById('catalog-container');
    const titleEl = document.getElementById('lab-title');
    const descEl = document.getElementById('lab-description');
    const frame = document.getElementById('catalogue-frame');
    const downloadLink = document.getElementById('download-catalogue');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const lab = params.get('lab');

    try {
        let product = null;
        if (id) {
            const response = await fetch(`/api/products/id/${id}`);
            product = await response.json();
        } else if (lab) {
            const response = await fetch('/api/products/all');
            const products = await response.json();
            product = (Array.isArray(products) ? products : []).find((item) => (item.labName || '').toLowerCase() === lab.toLowerCase());
        }

        if (!product) {
            if (titleEl) titleEl.textContent = 'Lab not found';
            if (descEl) descEl.textContent = 'The requested catalogue could not be loaded.';
            if (frame) frame.src = '';
            if (downloadLink) downloadLink.style.display = 'none';
            return;
        }

        if (titleEl) titleEl.textContent = product.labName || 'Lab Details';
        if (descEl) descEl.textContent = product.shortDesc || 'Detailed catalogue will appear here.';

        const pdfUrl = getPdfUrl(product);
        const previewUrl = getCataloguePreviewUrl(pdfUrl);
        if (frame) {
            frame.src = previewUrl || '';
        }

        if (downloadLink) {
            downloadLink.href = pdfUrl || '#';
            downloadLink.download = `${(product.labName || 'catalogue').replace(/\s+/g, '_')}.pdf`;
            downloadLink.style.display = pdfUrl ? 'inline-flex' : 'none';
        }

        const details = document.getElementById('lab-details');
        if (details) {
            details.innerHTML = `
                <p><strong>Category:</strong> ${escapeHtml(product.category || 'N/A')}</p>
                <p><strong>Lab Name:</strong> ${escapeHtml(product.labName || 'N/A')}</p>
                <p><strong>Description:</strong> ${escapeHtml(product.shortDesc || 'N/A')}</p>
            `;
        }
    } catch (error) {
        console.error('Failed to load product details:', error);
        if (titleEl) titleEl.textContent = 'Unable to load catalogue';
        if (descEl) descEl.textContent = 'Please try again later.';
    }
}

// enquiry form
const form = document.getElementById('enquiry-form');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            mobile: document.getElementById('mobile').value,
            message: document.getElementById('msg').value,
        };

        const response = await fetch('/api/send-enquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (result.success) {
            alert('Success! Message humein mil gaya hai.');
            form.reset();
        } else {
            alert('Error! Kuch gadbad ho gayi, baad mein try karo.');
        }
    });
}

// initializer
document.addEventListener('DOMContentLoaded', async () => {
    await includeHTML();
    setupGlobalSearch();
    setupResponsiveMenu();
    setupCategoryLinks();
    initHeroSlider();

    if (document.querySelector('.product-grid')) {
        await loadProductsPage();
    } else if (document.getElementById('catalog-container')) {
        await loadProductDetailsPage();
    } else if (document.querySelector('.featured-product')) {
        await loadFeaturedProducts();
    }
});
