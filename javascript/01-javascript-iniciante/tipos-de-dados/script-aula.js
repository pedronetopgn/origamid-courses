var idade = 21;
var simbolo = Symbol();
console.log(typeof simbolo);

var nome = 'Pedro';
var sobrenome = 'Gonçalves';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(frase);
console.log('Tipo da frase:', typeof frase);

/* Concatena, e não soma */
var ano = '2018';
var mes = 8;
console.log(ano + mes);

/* A barra invertida inpede o funcionamento do proximo caractere especial */
var melhor = 'teste';
var sentenca = "Esse é o \"melhor\" jogo";
console.log(sentenca);

//usando template string: 
var frase2 = `Romário fez ${gols} gols`;
console.log(frase2);