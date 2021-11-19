(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('mob-menu');
    const menuClose = document.getElementById('mob-menu-close');
    const menuOpen = document.getElementById('mob-menu-open');

    if (menuOpen) {
      menuOpen.addEventListener('click', () => {
        if (menu) {
          menu.setAttribute('data-open', '');
        }
      });
    }
    if (menuClose) {
      menuClose.addEventListener('click', () => {
        if (menu) {
          menu.removeAttribute('data-open');
        }
      });
    }
    if (menu) {
      menu.addEventListener('click', (e) => {
        if (e.target.className === 'mob-menu') {
          e.stopPropagation();
          menu.removeAttribute('data-open');
        }
      });
    }
  });
})();
