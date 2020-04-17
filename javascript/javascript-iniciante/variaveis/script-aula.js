var nome = 'Pedro'
var idade = 21;
var possuiFaculdade = false;

console.log(nome, idade, possuiFaculdade, nome);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

var sobrenome = 'Gonçalves', 
    cidade = 'Teresina';

console.log(sobrenome, cidade);

// declarando variável sem definir o tipo
var semDefinir;
console.log(semDefinir);

// Hoisting: declara todas as variáveis como undefined no começo do código
console.log(comida);
var comida = 'pizza';
console.log(comida);

/* var é possível redeclarar, let nem const são possíveis redeclarações */ 
/*var time = "Flamengo";
console.log(time);
time = "Vasco";
console.log(time);*/
