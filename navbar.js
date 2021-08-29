window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > (window.screen.availHeight/15);
  header.classList.toggle('scrolling-active', windowPosition);
})
