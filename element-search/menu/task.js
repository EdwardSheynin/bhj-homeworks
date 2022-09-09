const menuLinks = Array.from(document.querySelectorAll('.menu__link'));
const hasSubMenu = menuLinks.filter(link => link.nextElementSibling !== null);

hasSubMenu.forEach(function(link) {
  link.onclick = function() {
    let clickLink = link;
    hasSubMenu.forEach(function(link) {
      if (link === clickLink) {
        link.nextElementSibling.classList.toggle('menu_active');
      } else {
        link.nextElementSibling.classList.remove('menu_active');
      }
    })
    return false;
  }
})