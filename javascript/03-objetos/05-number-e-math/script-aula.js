const oi = 'Oi,';
const apresentacao = ' meu nome é Pedro';
const fraseFinal = oi.concat(apresentacao);
console.log(fraseFinal);

// Verificando existência de uma string em outra:
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta));
console.log(fruta.includes(listaFrutas));

console.log(fruta.startsWith('Ba'));
console.log(fruta.endsWith('nas'));

// SLICE:
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0,3)); // vai do índice 0 ao 3-1
console.log(transacao2.slice(3)); // corta X numeros do começo
console.log(transacao1.slice(0,-2)); // corta de trás para a frente
console.log(transacao3.slice(-2)); // retorna os 2 últimos caracteres

console.log(fruta.indexOf('n')); // índice da primeira ocorrência
console.log(fruta.lastIndexOf('n')); // índice da última ocorrência

const preco = 'R$ 99,00'
console.log(preco.padStart(20)); // preenche no começo até um total de 20 caracteres
console.log(preco.padEnd(10, '-')); // preenche no final até um total de 10 caracteres

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => {
    console.log(item.padStart(10, ' '));
});

// REPLACE:
let listaItens = 'Camisas bonés calças bermudas vestidos saias';
listaItens = listaItens.replace(/[ ]+/g, ', '); // para pegar todos os espaços da string, é necessário usar a regExp no primeiro parâmetro.
console.log(listaItens);

// SPLIT:
const arrayLista = listaItens.split('s, '); // split retorna um array
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');
console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

let valor = '        R$ 120,00     ';
console.log(valor);
valor = valor.trim(); // remove os espaços do início e final, existe também o trimStart e trimEnd que retiram espaços do ínicio da string e do final, respectivamente
console.log(valor);