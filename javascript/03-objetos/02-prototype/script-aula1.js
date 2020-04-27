function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return console.log('Abraçou');
  }
}
const pedro = new Pessoa('Pedro', 21);

Pessoa.prototype.andar = function () { //adicionando métodos com protoype
  return console.log(this.nome + ' andou');
}

Pessoa.prototype.nadar = function () { 
  return console.log(this.nome + ' nadou');
}


pedro.andar();
pedro.nadar();

console.log(Pessoa.prototype);
// console.log(pedro.prototype); undefined pois prototype se refere à funçao

const pais = 'Brasil';
const cidade = new String('Teresina');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');

// Transformar em array
const listaArray1 = Array.prototype.slice.call(lista)
const listaArray2 = Array.from(lista);

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return true;
  }
}








