/*const grandparent = document.getElementById('grandparent-id');
// grandparent.style.backgroundColor = '#333';
changeColor(grandparent);*/

/*// const parents = document.getElementsByClassName('parent');
const parents = Array.from(document.getElementsByClassName('parent'));
parents.forEach(changeColor);*/

/*const grandparent = document.querySelector('.grandparent');
changeColor(grandparent);*/

/*const parents=document.querySelectorAll('.parent')
parents.forEach(changeColor);*/

/*const grandparent = document.querySelector('.grandparent');
const parents = Array.from(grandparent.children);
// parents.forEach(changeColor);
const parentOne = parents[0];
const children = parentOne.children;
changeColor(children[0]);*/

/*const grandparent = document.querySelector('.grandparent');
const children = grandparent.querySelectorAll('.child');
children.forEach(changeColor);*/

const childOne = document.getElementById('child-one');
const parent = childOne.parentElement;
// const grandparent = childOne.closest('.grandparent');
const grandparent = childOne.closest('#grandparent-id');
const childTwo=childOne.nextElementSibling;
// changeColor(childTwo);
changeColor(childTwo.previousElementSibling);


function changeColor(element) {
  element.style.backgroundColor = '#333';
}