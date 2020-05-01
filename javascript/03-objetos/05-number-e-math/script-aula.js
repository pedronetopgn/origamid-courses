// Métodos Number
// parseFloat() para passar de string para float
console.log(parseFloat('3240'));
console.log(parseFloat('324034 reais'));

// parseInt() passar para inteiro
console.log(parseInt(23.39, 10))

// toFixed() arredonda número com base na quantidade de casas q o parâmetro pede
const preco = 2.99;
console.log(preco.toFixed()); //Retorna uma string

const carro = 1000.455;
console.log(carro.toFixed(2));

// toString() transforma número em String
const preco2 = 3.99
console.log(preco2.toString());

// toLocaleString()
let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(valor);

// valores aleatórios com Math.random()
const max = 10;
const min = 0;
const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(aleatorio);
