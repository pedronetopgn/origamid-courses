// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Taxa Cliente',
        valor: 'R$ 49',
    },
];

let taxaTotal = 0;
let RecebimentoTotal = 0;
transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$', ''); // + no começo transforma a string em número
    if(item.descricao.slice(0,4) === 'Taxa') {
        taxaTotal += numeroLimpo;
    } else {
        RecebimentoTotal += numeroLimpo;
    }
});

console.log(taxaTotal);
console.log(RecebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const listaTransportes = transportes.split(';');
console.log(listaTransportes);

// Substitua todos os span's por a's
let html = `<ul>
<li><span>Sobre</span></li>
<li><span>Produtos</span></li>
<li><span>Contato</span></li>
</ul>`;
html = html.split('span').join('a');
console.log(html);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length-1]);
// ou frase.slice(-1);

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', ' TAXA DO PÃO', ' taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let cont = 0;
transacoes2.forEach((item, index) => {
    transacoes2[index] =  item.toLowerCase();
    // ou item.toLowerCase().trim().split(0,4) === taxa
    if(transacoes2[index].includes('taxa'))
        cont++;  
});
console.log(transacoes2);
console.log("Foram encontradas " + cont + " palavras 'taxa'");
