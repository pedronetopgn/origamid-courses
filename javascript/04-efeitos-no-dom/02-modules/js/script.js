import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
//import {teste1, teste2} from './modules/teste.js'; // assim o nome do import tem que ser identico ao da função que se deseja usar, ou pode ser usado: testando as nomeQualquer.
import * as teste from './modules/teste.js'; //importar tudo sem saber o nome das funções
// teste1();
// teste2();

teste.teste1();
teste.teste2();
console.log(teste.senha);

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();