// Crie uma função construtora de Pessoas, deve conter nome, sobrenome, idade. Crie um método no protótipo que retorne o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
// console.log(Object.getOwnPropertyNames(NodeList.prototype));
// console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
// console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLElement
li.click; // Function
li.innerText; //String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo?
li.hidden.constructor.name; // String