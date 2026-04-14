const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const langToggle = document.getElementById('lang-toggle');
const langToggleMobile = document.getElementById('lang-toggle-mobile');
const langText = document.getElementById('lang-text');

// 1. Set default to 'BN' because your HTML starts with Bengali text
let currentLang = 'BN'; 

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

// 2. Language Switch Logic
const updateLanguage = () => {
    const elements = document.querySelectorAll('[data-en]');
    const siteName = document.getElementById('site-name');
    
    // Smooth transition: Fade out
    const allTextElements = [...elements, siteName];
    allTextElements.forEach(el => el.style.opacity = '0');

    setTimeout(() => {
        if (currentLang === 'BN') {
            // CURRENT is BN -> Switch to EN
            elements.forEach(el => {
                el.textContent = el.getAttribute('data-en');
            });
            siteName.textContent = "Mohammed Touaha Akbar";
            
            // Update button labels to show switch-back option
            langText.textContent = 'BN'; 
            langToggleMobile.textContent = 'Switch to Bengali';
            currentLang = 'EN';
        } else {
            // CURRENT is EN -> Switch to BN
            elements.forEach(el => {
                el.textContent = el.getAttribute('data-bn');
            });
            siteName.textContent = "মোহাম্মদ তোয়াহা আকবর";
            
            langText.textContent = 'EN';
            langToggleMobile.textContent = 'Switch to English';
            currentLang = 'BN';
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
    elements.forEach(el => {
        el.style.transition = 'opacity 0.3s ease';
        el.style.opacity = '1';
    });
};