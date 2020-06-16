const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);

function handleClick () {
    setTimeout(() => {
        console.log(this);
        this.classList.add('active');
    }, 1000);
}

setTimeout(() => {
    console.log('Testando');
}, 0);

/*for(let i=0; i<20; i++){
    setTimeout(() => {
        console.log(i)
    }, 1000 * i)
}*/

function loop (texto) {
    console.log(texto);
}

let i = 0;
const meuLoop = setInterval(() => {
    console.log(i++);
    if(i>20) {
        clearInterval(meuLoop);
    }
}, 300);