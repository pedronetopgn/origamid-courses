var pessoa = {
    nome: "Pedro",
    idade: 21,
}

console.log(pessoa.idade);

/* é possível ter métodos como atributos de objetos */
var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    },
}

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// Exercícios:
console.log("Exercícios:")
// Crie um objeto com os seus dados pessoais
var eu = {
    nome: 'Pedro',
    sobrenome: 'Gonçalves',
    cidade: 'Teresina',
    altura: 1.80,
}
// Crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}
console.log(eu.nomeCompleto());
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: "Audi",
}

carro.preco = 3000;
console.log(carro.preco);
// Crie um objeto de um cachorro que representa um labrador preto com 10 anos que late ao ver um homem.
var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem'){
            return 'AUAUAUAU'
        }else {
            return 'ZzZzZzZ';
        }
    }
}

console.log(cachorro.latir('homem'));