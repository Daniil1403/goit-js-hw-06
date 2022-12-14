function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

btnRef.addEventListener('click', changeColor);

function changeColor() {
 bodyRef.style.backgroundColor = getRandomHexColor();

 spanRef.after(getRandomHexColor());
}
