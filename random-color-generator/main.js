const colorCodeElement = document.querySelector('.color-code');

function generateColor() {
  const color = Math.random().toString(16).substr(-6).toUpperCase();
  const randomColor = `#${color}`;
  colorCodeElement.textContent = randomColor;
  document.body.style.background = randomColor;
}

colorCodeElement.addEventListener('click', generateColor);
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    generateColor();
  }
});
