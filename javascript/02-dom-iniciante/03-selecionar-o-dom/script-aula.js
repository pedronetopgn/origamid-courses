const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);
 
const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);
 
const linksInterno = document.querySelector('[href^="#"]');
console.log('Primeiro link interno ', linksInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName('grid-section'); //HTMLCollection AO VIVO
const gridSectionNode = document.querySelectorAll('.grid-section'); //NodeList ESTÁTICO

primeiraUl.classList.add('grid-section');

//console.log(gridSectionHTML);
//console.log(gridSectionNode);

gridSectionNode.forEach((item, index) => {
    console.log(item, index);
});

// Para usar o forEach em um HTMLCollection:
const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach((item) => {
    console.log('Array Grid', item);
});
















