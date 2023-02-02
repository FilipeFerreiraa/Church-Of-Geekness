function toggle_menu() {
  let container = document.getElementById('mobile-nav-container');
  let header_container = document.getElementById('header-container');

  if (container.classList.contains('close')) {
    container.classList.remove('close');
    container.classList.add('open');
    header_container.style.margin = '0 0 0 0'
  } else if (container.classList.contains('open')) {
    container.classList.remove('open');
    container.classList.add('close');
    header_container.style.margin = '0 0 80px 0'
  }
}