const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const langToggle = document.getElementById('lang-toggle');
const langToggleMobile = document.getElementById('lang-toggle-mobile');
const langText = document.getElementById('lang-text');

let currentLang = 'EN'; // Default matches HTML initial state

// Toggle Mobile Menu
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

const closeMenu = () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
};

closeBtn.addEventListener('click', closeMenu);

// Language Switch Logic
const updateLanguage = () => {
    const elements = document.querySelectorAll('[data-en]');
    const siteName = document.getElementById('site-name');
    const heroIntro = document.getElementById('hero-intro');
    
    // Add fade-out effect during transition
    const allTextElements = [...elements, siteName];
    allTextElements.forEach(el => el.style.opacity = '0');

    setTimeout(() => {
        if (currentLang === 'EN') {
            // Switch to BN
            elements.forEach(el => {
                el.textContent = el.getAttribute('data-bn');
            });
            siteName.textContent = "মোহাম্মদ তোয়াহা আকবর";
            langText.textContent = 'EN';
            langToggleMobile.textContent = 'Switch to English';
            currentLang = 'BN';
        } else {
            // Switch to EN
            elements.forEach(el => {
                el.textContent = el.getAttribute('data-en');
            });
            siteName.textContent = "Mohammed Touaha Akbar";
            langText.textContent = 'BN';
            langToggleMobile.textContent = 'Switch to Bengali';
            currentLang = 'EN';
        }
        
        // Fade back in
        allTextElements.forEach(el => el.style.opacity = '1');
    }, 200);
};

// Listeners
langToggle.addEventListener('click', updateLanguage);
langToggleMobile.addEventListener('click', () => {
    updateLanguage();
    setTimeout(closeMenu, 400);
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Initialize styles for transitions
window.onload = () => {
    const elements = document.querySelectorAll('[data-en], #site-name');
    elements.forEach(el => el.style.transition = 'opacity 0.3s ease');
};