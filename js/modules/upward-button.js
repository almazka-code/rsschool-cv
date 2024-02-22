// button upward
let calcScrollValue = () => {
  const scrollUpward = document.querySelector('.upward');
  const position = document.documentElement.scrollTop;
  const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollValue = Math.round((position * 100) / calcHeight);

  position > 500 ? scrollUpward.style.display = 'flex' : scrollUpward.style.display = 'none';

  scrollUpward.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  })

  scrollUpward.style.background = `conic-gradient(#6dbde1 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

window.addEventListener('scroll', calcScrollValue);