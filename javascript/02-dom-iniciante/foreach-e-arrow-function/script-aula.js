// const imgs = document.querySelectorAll('img');
// console.log(imgs);
// imgs.forEach(function(item) {
//     // console.log(item);
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);
titulosArray.forEach(function(item) {
    // console.log(item);
});

//ARROW FUNCTION:
const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) => {
    console.log(item, index);
});

let i = 0;
let j = 0;
imgs.forEach(() => console.log(i++));
// ou: 
imgs.forEach(() => {
    console.log(j++);
});









