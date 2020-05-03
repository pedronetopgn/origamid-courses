// const carro = {
//     rodas: 4,
//     init(valor) {
//         this.marca = valor;
//         return this;
//     },
//     acelerar() {
//         return this.marca + ' acelerou';
//     },
//     buzinar() {
//         return this.marca + ' buzinou';

//     }
// }

// const honda = Object.create(carro).init('Honda');
// console.log(honda.acelerar())

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar())

// const funcaoAutomovel = {
//     acelerar() {
//     return 'acelerou';
//     },
//     buzinar() {
//     return 'buzinou';
//     },
// }

// const moto = {
//     rodas: 2,
//     capacete: true,
// }

// Object.assign(moto, funcaoAutomovel); // adiciona métodos de funcaoAutomovel em moto
// console.log(moto);

const moto = {
}


Object.defineProperties(moto, { // dessa forma, torna a propriedade constante
    rodas: {
        enumerable: true,
        //value: 2, // não pode ter valor quando tem get e set
        //configurable: false, // se permite deletar
        //writable: false, // se permite alteração
        get() {
            return this._rodas;
        },
        set(valor) {
            this._rodas = valor * 4;
        }
    }
});
moto.rodas = 5;
console.log(moto);

Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis
// const carro = {
//     marca: 'Ford',
//     ano: 2018,
// }
Object.keys(carro);
// ['marca', 'ano']
Object.values(carro);
// ['Ford', 2018]
Object.entries(carro);
// [['marca', 'Ford'], ['ano', 2018]]

let frutas = ['Banana'];
console.log(Object.getPrototypeOf(frutas)); // protótipo de array
let frutas2 = ['Banana'];
// frutas2 = frutas; tornaria true
console.log(Object.is(frutas,frutas2));

const carro = {
    marca: 'Ford',
    ano: 2018,
}
    Object.freeze(carro);
    Object.seal(carro);
    Object.preventExtensions(carro);
    Object.isFrozen(carro);