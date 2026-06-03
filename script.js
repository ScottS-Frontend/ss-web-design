// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved preference or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    html.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
} else {
    html.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌙';
}

// Toggle function
themeToggle.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
        themeToggle.setAttribute('aria-pressed', 'false');
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
        themeToggle.setAttribute('aria-pressed', 'true');
    }
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isExpanded = navLinks.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px var(--shadow)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Fade out logo on scroll
window.addEventListener('scroll', () => {
    const logos = document.querySelectorAll('.logo-img');
    const scrollY = window.scrollY;

    logos.forEach(logo => {
        if (scrollY > 100) {
            logo.style.opacity = '0';
            logo.style.pointerEvents = 'none';
            logo.style.transition = 'opacity 0.3s ease';
        } else {
            logo.style.opacity = '1';
            logo.style.pointerEvents = 'auto';
            logo.style.transition = 'opacity 0.3s ease';
        }
    });
});