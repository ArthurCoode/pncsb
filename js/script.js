// Menu Mobile
function initMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    const body = document.body;

    if (!mobileBtn || !nav) return;

    mobileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        nav.classList.toggle('active');
        mobileBtn.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
        mobileBtn.setAttribute('aria-expanded', !isExpanded);
    });

    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileBtn.classList.remove('active');
            body.classList.remove('menu-open');
            mobileBtn.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && e.target !== mobileBtn) {
            nav.classList.remove('active');
            mobileBtn.classList.remove('active');
            body.classList.remove('menu-open');
            mobileBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

// Animação da Timeline
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => observer.observe(item));
}

// Efeito Parallax
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    animateTimeline();
    initParallax();
});