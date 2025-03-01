
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpan = document.querySelector('.color');
const changeButton = document.querySelector('.change-color');

changeButton.addEventListener('click', () => {
    const newColor = getRandomHexColor();

    console.log('New background color:', newColor);

    document.body.style.backgroundColor = newColor;
    colorSpan.textContent = newColor;
});