let counterValue = 0;

const buttonDecrementEl = document.querySelector(
 'button[data-action="decrement"]'
);

const buttonIncrementEl = document.querySelector(
 'button[data-action="increment"]'
);

buttonDecrementEl.addEventListener('click', () => {
 console.log((counterValue -= 1));
});

buttonIncrementEl.addEventListener('click', () => {
 console.log((counterValue += 1));
});
