const href = window.location.href;

console.log(href);

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function callbackh1() {
    console.log(`Clicou em ${h1Selecionado.innerText}`);
}

h1Selecionado.addEventListener('click', callbackh1);