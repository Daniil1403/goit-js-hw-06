const listCategory = document.querySelectorAll('li.item');
console.log('Number of categories:', listCategory.length);

listCategory.forEach(function (category) {
 console.log('Category:', category.firstElementChild.textContent);
 console.log('Elements:', category.lastElementChild.childElementCount);
});

//const navLiEl = document.querySelectorAll('.item');
//console.log('Number of categories:', navLiEl.length);

//const titleEl = document.querySelectorAll('.item h2');
//console.log('Category:', titleEl[0].textContent);

//const liEl = document.querySelectorAll('.item li');
//console.log('Elements:', liEl.length - 8);

//console.log('Category:', titleEl[1].textContent);
//console.log('Elements:', liEl.length - 9);

//console.log('Category:', titleEl[2].textContent);
//console.log('Elements:', liEl.length - 7);
