const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.clientHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroH2 = document.querySelector('h2');
const h2left = primeiroH2.offsetLeft;

const h2rect = primeiroH2.getBoundingClientRect();

if(h2rect.top < 0) {
    console.log('passou do elemento');
}

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset
);

const small = window.matchMedia('(max-width: 600px)').matches; // verifica o width atual da página, responsividade.
if(small) {
    console.log('Usuário mobile');
} else {
    console.log('Usuário desktop')
}