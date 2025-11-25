// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate dog cards on scroll (fade in)
const dogCards = document.querySelectorAll('.dog-card');

const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

// Initialize dog cards hidden
dogCards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(card);
});

// Expand search input on focus
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('focus', () => {
  searchInput.style.transition = 'width 0.4s ease';
  searchInput.style.width = '200%';
});
searchInput.addEventListener('blur', () => {
  searchInput.style.transition = 'width 0.4s ease';
  searchInput.style.width = '100%';
});

// Hover effects on dog cards
document.querySelectorAll('.dog-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  });
});
