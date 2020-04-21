// Mostre no console cada parágrafo do site
//const paragrafos = document.getElementsByTagName('p');
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(item => console.log(item));
// Mostre o texto dos parágrafos no console
// PRIMEIRO MÉTODO COM HTMLCOLLECTION:
    // const textoParagrafos = Array.from(paragrafos);
    // textoParagrafos.forEach(item => console.log(item.innerText));
paragrafos.forEach((item) => console.log(item.innerText));
