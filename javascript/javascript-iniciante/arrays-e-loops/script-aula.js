var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];

//videoGames.pop(); //Remove o último
//videoGames.push('3DS'); //Insere no final

console.log(videoGames);

console.log("For");
for(var i=0; i<=10; i++){
    console.log(i);
}

console.log("While");
var j = 10;
while(j >= 0){
    console.log(j--);
}

for(var item = 0; item < videoGames.length; item++){
    console.log(videoGames[item]);
}

console.log("For each");
videoGames.forEach(function(i, pos) {
    console.log(i, pos);
});


