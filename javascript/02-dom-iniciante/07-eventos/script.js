// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach((link) => {
    link.addEventListener('click', handleClickLink);
});

function handleClickLink(event) {
    linksInternos.forEach((link) => {
        if(link.classList.contains('ativo')) {
            link.classList.remove('ativo');
        }
    });
    event.preventDefault();
    event.currentTarget.classList.add('ativo');
}

//Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleTodosElementos);
});

function handleTodosElementos(event) {
    console.log(event.currentTarget);
}

// Utilizando o código anteiror, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento
// RESPOSTA:
// function handleTodosElementos(event) {
//     this.remove(); // = event.currentTarger.remove();
// }

// Se o usuário clicar na tecla (t), aumente todo o texto do site
window.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
    if(event.key === 't') {
        document.documentElement.classList.toggle('redimensionar');
    }
}