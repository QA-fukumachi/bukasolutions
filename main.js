document.addEventListener('DOMContentLoaded', () => {
  
  // Sticky Navbar
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navbar.classList.toggle('menu-open');
    });
  }

  // Mobile Dropdown Toggle
  const dropdownToggle = document.querySelector('.nav-item.dropdown > a');
  if (dropdownToggle && window.innerWidth <= 768) {
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownToggle.parentElement.classList.toggle('active');
    });
  }

  // Scroll Animations (Fade Up)
  const fadeElements = document.querySelectorAll('.fade-up');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => {
    observer.observe(el);
  });

  // Web3Forms Reply-To Logic
  const emailInput = document.getElementById('email');
  const replyToField = document.getElementById('replyto-field');
  
  if (emailInput && replyToField) {
    emailInput.addEventListener('input', function () {
      replyToField.value = this.value;
    });
  }

});

// Reset forms on back navigation
window.addEventListener('pageshow', () => {
  document.querySelectorAll('form').forEach(form => form.reset());
});
