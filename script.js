const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

function toggleNav() {
  // toggle: menu bars
  menuBars.classList.toggle('change');

  // toggle: menu active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // animate IN - overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');

  } else {
    // animate OUT - overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
  }
}

// event listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach(nav => {
  nav.addEventListener('click', toggleNav);
});