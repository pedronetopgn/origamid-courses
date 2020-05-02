const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor:'Azul',preco: 2000}], function andar(nome) { console.log(nome)
}];

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

console.log(li);
console.log(arrayLi);

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const idades = [32,21,33,43,1,12,8];
instrumentos.sort();
idades.sort();

// adicionando item no início ou final do array: unshift() começo, push() final
const carros = ['Ford', 'Fiat', 'Honda'];
carros.unshift('Kia', 'Ferrari'); // retorna o novo tamanho do array
carros.push('Gol'); // retorna o novo tamanho do array

// removendo item do array, shift() tira o primeiro e retorna, pop() tira o último e o retorna.
carros.pop(); // retira gol
carros.shift(); // retira kia

// reverse() inverte a ordem do array:
console.log(carros);
carros.reverse() // modifica o array 
// console.log(carros);

// splice(): insere no array os valores passados a partir do índice
console.log(carros);
console.log(carros.splice(2,1,'Fusca')); // retorna o item removido, 2 é o índice que deseja se começar a adicionar, 0 é quantos itens vao ser removidos para isso
console.log(carros);

// fill(itemQVaiPreencher, indiceInicio, indiceFim)
console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana',0,2));

// MÉTODOS DE ACESSO: Não modificam a array original
// concat()
const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
console.log(transportes);

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
console.log(maisTransportes);

// includes(), indexOf(), lastIndexOf()
const linguagens = ['html', 'css', 'js', 'php', 'python',
'js'];
linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5

// join(): junta todo o array em uma string
let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');
console.log(htmlString);

// slice(inicio, final) retorna os itens da array, começando pelo início e indo até o valor de final.
const cloneLinguagens = linguagens.slice(); // clonando array
console.log(linguagens.slice(3)); // ['php', 'python']
console.log(linguagens.slice(1, 4)); // ['css', 'js', 'php'] // não inclue o índice final
