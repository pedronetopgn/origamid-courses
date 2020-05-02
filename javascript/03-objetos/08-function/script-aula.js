// function somar (n1, n2) {
//     return n1 + n2;
// }

// console.log(somar(3,3));
// console.log(somar.length);
// console.log(somar.name);

// function darOi() {
//     console.log('Oi');
// }
// darOi.call();

// function descricaoCarro(velocidade) {
//     console.log(this);
//     console.log(this.marca + ' ' + this.ano + velocidade);
// }
// descricaoCarro.call({marca: 'Honda', ano: 2015}, 100); // passa um objeco como principal

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Pêra', 'Uva'];

// carros.forEach.call(frutas,(item) => {
//     console.log(item);
// })

// function Dom(seletor) {
//     this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//     console.log(this);
//     this.element.classList.add(classe);
// }

// const li = {
//     element: document.querySelector('li'),
// }

// Dom.prototype.ativo.call(li, 'ativar');


// const ul = new Dom('ul');

// ul.ativo.call(li, 'ativar');


const frutas = ['Banana', 'Pêra', 'Uva'];

Array.prototype.mostrarThis = function() {
    console.log(this);
}

Array.prototype.pop.call(frutas);
frutas.pop(); // igual ao de cima

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => { //dessa forma com call pois por padrão no nodeList, não existe o método filter, outra forma seria transformando em array: Array.from(li)
    return item.classList.contains('ativo');
});

console.log(filtro);

console.log(li);

const numeros = [3,43,56,445,4332,322,23];
console.log(Math.max.apply(null, numeros)); //apply recebe um array e transforma cada item em argumento

const $ = document.querySelectorAll.bind(document); // encurta a função para o nome da variável, pode ter um segundo argumento que ja retorna algo document.querySelectorAll.bind(document, 'li'); assim sempre retornará li

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
}

const honda = {
    marca: 'Honda',
}

const acelerarHonda = carro.acelerar.bind(honda, 100);

console.log(acelerarHonda(20));

console.log(carro.acelerar(100, 20));
console.log(carro);
