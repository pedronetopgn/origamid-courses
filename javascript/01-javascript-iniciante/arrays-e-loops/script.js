// Crie uma array com os anos que o Brasil ganhou a copa 1959, 1962, 1970, 1994, 2002
var campeao = ['1959', '1962', '1970', '1994', '2002'];
// Interaja com o array utilizando um loop para mostrar no console a mensagem: 'O Brasil ganhou a copa de ${ano}
campeao.forEach(function(ano){
    console.log(`O Brasil ganhou a copa de ${ano}`);
});
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera 
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];
for(var i = 0; i < frutas.length; i ++){
    if(frutas[i] === 'Pera')
        break;
    console.log(frutas[i]);
}
// Coloque a última fruta do array acima em uma variável, sem remover a mesma do array
var ultimaFruta = frutas[frutas.length-1];
console.log(ultimaFruta);