const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
console.log(comidas);
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValor = comidas.shift();
console.log(comidas);
// Remova o último valor de comidas e coloque em uma variável
const ultimoValor = comidas.pop();
console.log(comidas);
// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');
console.log(comidas);
//-------------------------------------------------------------------------
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber',
'Julia'];
console.log(estudantes);
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);
// Inverta a ordem dos estudantes
estudantes.reverse()
console.log(estudantes);
// Verifique se Joana faz parte dos estudantes
if(estudantes.includes('Joana')){
    console.log('Joana faz parte dos estudantes');
} else {
    console.log('Joana não faz parte dos estudantes');
}
// Verifique se Juliana faz parte dos estudantes
if(estudantes.includes('Juliana')){
    console.log('Juliana faz parte dos estudantes');
} else {
    console.log('Juliana não faz parte dos estudantes');
}
//-------------------------------------------------------------------------
let html = `<section>
<div>Sobre</div>
<div>Produtos</div>
<div>Contato</div>
</section>`
// Substitua section por ul e div com li,
html = html.split('section').join('ul');
console.log(html);
// utilizando split e join
html = html.split('div').join('li');
console.log(html);
//-------------------------------------------------------------------------
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(carros);
// Remova o último carro, mas antes de remover salve a array original em outra variável
const copiaCarros = carros.slice();
carros.pop();
console.log('Copia dos carros: ', copiaCarros);
console.log(carros);
