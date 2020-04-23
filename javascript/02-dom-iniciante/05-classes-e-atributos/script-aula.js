// CLASSES:
const menu = document.querySelector('.menu');
// Adicionando e removendo classes
menu.classList.add('ativo');
menu.classList.remove('azul');
//menu.classList.toggle('azul');

if(menu.classList.contains('azul')) {
    menu.classList.add('possui-azul');
} else { 
    menu.classList.add('nao-possui-azul');
}

console.log(menu.className);
menu.className += ' vermelho';
console.log(menu.className);

// ATRIBUTOS:
const animais = document.querySelector('.animais');
console.log(animais.attributes);
// get e set attribute:
const img = document.querySelector('img');
const srcImg = img.getAttribute('src');
console.log(srcImg); //passando o atributo que quer acessar como parâmetro

img.setAttribute('alt', 'É uma raposa'); //primeiro parametro é o que deseja mudar, e o segundo o valor que deseja-se adicionar nele

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);
