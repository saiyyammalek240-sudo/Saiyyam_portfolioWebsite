// Mobile Menu Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// Close mobile menu when clicking on links
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// Active link on scroll (placeholder for future)
const sections = document.querySelectorAll('section[id]');

// Interactive hero orb
const hero = document.getElementById('home');
const orb = document.querySelector('.home__blob-bg');
let rafId = null;

function handlePointer(e) {
    if (!orb) return;
    const rect = orb.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;  // ~ -0.5 .. 0.5
    const dy = (e.clientY - cy) / rect.height; // ~ -0.5 .. 0.5
    const dist = Math.min(1, Math.hypot(dx, dy) * 2);

    // Map cursor to translation and subtle tilt
    const translateX = dx * 14;
    const translateY = dy * 14;

    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
        orb.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${dx * -4}deg)`;
        orb.style.filter = `saturate(${1 + dist * 0.2}) brightness(${1 + dist * 0.06})`;
    });
}

function resetOrb() {
    if (!orb) return;
    if (rafId) cancelAnimationFrame(rafId);
    orb.style.transform = '';
    orb.style.filter = '';
}

if (hero && orb) {
    hero.addEventListener('pointermove', handlePointer);
    hero.addEventListener('pointerleave', resetOrb);
}
