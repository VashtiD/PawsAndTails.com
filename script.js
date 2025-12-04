// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Search breed redirect
  document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('dog-search').value.trim().toLowerCase();
    const breedPages = {
      'fluffy': 'Fluffy.html',
      'pebbles': 'Pebbles.html',
      'angelo': 'Angelo.html'
    };
    if (breedPages[query]) {
      window.location.href = breedPages[query];
    } else {
      alert('Breed not found or page not available.');
    }
  });

  // Handle Adopt Me! button clicks
  document.querySelectorAll('.adopt-button').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Please sign in to adopt a pet.');
      // Show the sign-in form
      document.getElementById('adoption-signin').style.display = 'block';
    });
  });

  // Sign-up form submission
  const adoptForm = document.getElementById('adopt-signin-form');
  if (adoptForm) {
    adoptForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you for signing up! We will contact you soon.');
      adoptForm.reset();
      document.getElementById('adoption-signin').style.display = 'none';
    });
  }
});
