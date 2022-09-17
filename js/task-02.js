const ingredients = [
 'Potatoes',
 'Mushrooms',
 'Garlic',
 'Tomatos',
 'Herbs',
 'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const items = ingredients.map((item) => {
 const itemsEl = document.createElement('li');
 itemsEl.classList.add('item');
 itemsEl.textContent = item;
 return itemsEl;
});

console.log(items);

ingredientsRef.append(...items);
//const elements = [];

//for (let i = 0; i < ingredients.length; i += 1) {
//const option = ingredients[i];

//const elementLi = document.createElement('li');
//elementLi.classList.add('item');
//elementLi.textContent = option;

//elements.push(elementLi);
//}

//console.log(elements);

//ingredientsRef.append(...elements);

//const ingredientsRef = document.querySelector('li');
//const ingredientsRef.classList.add('item');
//const ingredientsRef.textContent = option;
