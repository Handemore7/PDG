// Aqui empieza lo de los selectores

var economico = document.querySelector('#economico');
var educativo = document.querySelector('#educativo');
var recreativo = document.querySelector('#recreativo');
var empatizar = document.querySelector('#Empatizar');
var definir = document.querySelector('#Definir');
var idear = document.querySelector('#Idear');
var prototipar = document.querySelector('#Prototipar');
var testear = document.querySelector('#Testear');
var implementar = document.querySelector('#Implementar');
var option01 = document.querySelector('#option01');
var option02 = document.querySelector('#option02');

economico.addEventListener('click', ()=>{
    option01.innerHTML = 'Economico';
});
educativo.addEventListener('click', ()=>{
    option01.innerHTML = 'Educativo';
});
recreativo.addEventListener('click', ()=>{
    option01.innerHTML = 'Recreativo';
});


empatizar.addEventListener('click', ()=>{
    option02.innerHTML = 'Empatizar';
});
definir.addEventListener('click', ()=>{
    option02.innerHTML = 'Definir';
});
idear.addEventListener('click', ()=>{
    option02.innerHTML = 'Idear';
});
prototipar.addEventListener('click', ()=>{
    option02.innerHTML = 'Prototipar';
});
testear.addEventListener('click', ()=>{
    option02.innerHTML = 'Testear';
});
implementar.addEventListener('click', ()=>{
    option02.innerHTML = 'Implementar';
});