// const carros = ['Ford','Fiat','Honda'];

// carros.forEach((item, index, array) => {
//     console.log(item.toUpperCase(), index, array);
// });

// const li = document.querySelectorAll('li');
// li.forEach((i,index) => {
//     i.classList.add('ativa'+index)
// });

// usando Map() ao invés de forEach()
// const carros = ['Ford','Fiat','Honda'];

// const novaArray = carros.map((item, index, array) => { // map retorna um novo array com os valores do retorno de cada iteração
//     console.log(item, index, array);
//     return index;
// });

// const numeros = [2,4,5,6,78];
// console.log(numeros);
// const numerosx2 = numeros.map(item => item*2);
// // const numerosx2 = numeros.map((item) => { // igual ao de cima
// //     return item*2;
// // });
// console.log(numerosx2);


// const aulas = [
//     {
//     nome: 'HTML 1',
//     min: 15
//     },
//     {
//     nome: 'HTML 2',
//     min: 10
//     },
//     {
//     nome: 'CSS 1',
//     min: 20
//     },
//     {
//     nome: 'JS 1',
//     min: 25
//     },
// ]

// const tempoAulas = aulas.map(aula => aula.min);
// console.log('Tempo aulas:',tempoAulas);


// //  const nomeAulas =  function nomeAulas(aula) {
// //     return aula.nome;
// //  } pode ser trocado pela linha abaixo:
// const nomeAulas = aula => aula.nome;
// const arrayNomeAulas = aulas.map(nomeAulas);

// console.log('Nome aulas:',arrayNomeAulas);

// reduce(): retorna um valor final
// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item) => {
//     console.log(acumulador, item);
//     return acumulador + item;
// }, 0);
// console.log('Soma total:',reduceAulas);

// const numeros = [10,25,30,3,54,33,22];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//     return anterior > atual ? anterior : atual;
// }, 0);
// console.log(maiorNumero);

// const aulas = [
//     {
//     nome: 'HTML 1',
//     min: 15
//     },
//     {
//     nome: 'HTML 2',
//     min: 10
//     },
//     {
//     nome: 'CSS 1',
//     min: 20
//     },
//     {
//     nome: 'JS 1',
//     min: 25
//     },
// ]

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//     acumulador[index] = aula.nome;
//     console.log(acumulador);
//     return acumulador;
// }, {})


const frutas = ['Banana', 'Pêra', 'Uva'];

// const temUva = frutas.some((item) => { // procura um verdadeiro para retornar tudo true (OR)
//     console.log(item);
//     return item === 'Uva';
// })
// console.log(temUva);

const every = frutas.every((fruta) => { // se todos forem verdadeiros, retorna true (AND)
    console.log(fruta);
    return fruta;
})

const indexUva = frutas.findIndex((item) => { // findIndex() retorna o índice quando acha
    return item === 'Uva';
})
console.log(indexUva);

const banana = frutas.find((item) => { // find() retorna o primeiro item true
    return item;
})
console.log(banana);

// console.log(every);

const numeros = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros.every((numero) => {
    return numero > 3;
});
console.log(maiorQue3);

const frutas1 = ['Banana', undefined, null, '', 'Uva', 0,
    'Maçã'];
const arrayLimpa = frutas1.filter((fruta) => { // retorna array com intens TRUE
    return fruta; // ['Banana', 'Uva', 'Maçã']
});
console.log(arrayLimpa);

const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const maiores15 = aulas.filter((aula) => {
    return aula.min > 15;
});
console.log(maiores15);