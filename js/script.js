// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// hamburger onclick
document.querySelector('#hamburger-menu').onclick = () =>    // () => adalah arrow function
  navbarNav.classList.toggle('active');

// klik diluar hamburger untuk menutup side bar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }
});