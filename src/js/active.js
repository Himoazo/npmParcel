"use strict"
// Lägger till class active för den aktuella sidan
window.onload = function() {
    const currentUrl = window.location.href;
    const navLinks = document.querySelectorAll('nav a');
    for (let i = 0; i < navLinks.length; i++) {
      if (navLinks[i].href === currentUrl) {
        navLinks[i].classList.add('active');
      }
    }
  };