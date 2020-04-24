const lista = document.querySelector('.animais-lista');

console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector('li:last-child'));

console.log(lista.previousSibling);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');

//animais.appendChild(titulo); // appendeChild leva um elemento de um lugar para outro, o destino está antes do .appendChild

//contato.insertBefore(animais, mapa);//primeiro parâmetro é o que se deseja mover, o segundo serve como referência para ser adicionado antes deste (IMPORTANTE, O SEGUNDO PARÂMETRO TEM QUE SER FILHO DO ELEMENTO QUE CHAMA A FUNÇÃO)

contato.replaceChild(lista, titulo);

const novoh1 = document.createElement('h1');
novoh1.innerText = 'Novo Título';
novoh1.classList.add('titulo');

mapa.appendChild(novoh1);

// clonando elemento

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);
faq.appendChild(cloneH1);