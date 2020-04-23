// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
menu.forEach((item) => {
    item.classList.add('ativo');
});
console.log(menu);
// Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item,index) => {
    if(index == 0){
        return;
    }
    item.classList.remove('ativo');
});
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) => console.log(item.hasAttribute('alt'), index));
// Modifique o href do link externo no menu
const hrefMenu = document.querySelector('a[href^="http"]');
hrefMenu.setAttribute('href', 'https://github.com/pedronetopgn');
console.log(hrefMenu);