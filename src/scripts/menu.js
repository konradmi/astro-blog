document.querySelector('.hamburger').addEventListener('click', () => {
  console.log('clicked in the browser')
  document.querySelector('.nav-links').classList.toggle('expanded')
});
