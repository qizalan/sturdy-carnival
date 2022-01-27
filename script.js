window.onload = () => {
  document.getElementById('header').classList.add('loaded');
}

window.onscroll = () => {
  const elements = document.getElementsByClassName('entries');
  for (element of elements) {
    const pos = element.getBoundingClientRect();
    if (pos.y <= window.innerHeight) element.classList.add('loaded');
  }
}