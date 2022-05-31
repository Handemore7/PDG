var fecha = document.querySelector('#fecha');
var presupuesto = document.querySelector('#presupuesto');
var tiempo = document.querySelector('#tiempo');
var proyecto = document.querySelector('#proyecto');
var descripcion = document.querySelector('#descripcion');
var etapa = document.querySelector('#etapa');
var metodologia = document.querySelector('#metodologia');
var herramientas = document.querySelector('#herramientas');



var randomNum = Math.floor(Math.random() * 6)+1;
var randomVal = Math.floor(Math.random() * 3000000)+1;
var randominitialVal = randomVal;

window.onload = () => {

    renderizeData();
}

function renderizeData(params) {
    fecha.innerHTML = '31/05/2022';
    presupuesto.innerHTML = `${(randomVal*(randomNum))} `;
    tiempo.innerHTML = `${randomNum} Meses`;
    proyecto.innerHTML = '01';
    descripcion.innerHTML = `Proyecto de tipo economico, con ${randomNum} meses de tiempo esperado, se estima aproximadamente un gasto de ${plus? (randomVal*(randomNum)): (randomVal*(randomNum))}`;
    etapa.innerHTML = `Actualmente se encuentra en una etapa de Ideación, a partir de aqui debe seguir el ciclo, continuando con prototipar -> testear -> implementar, y volver a iterar todo el proceso desde la primera etapa.`;
    metodologia.innerHTML = `Cada etapa tendrá una duración de 1 sprint, el cual constará de 10 días, teniendo en 3 meses un total de 9 sprints, por lo cual teniendo en cuenta que se empieza en la etapa de Ideación, se espera en 3 meses haber pasado por todas las etapas y terminar en la segunda iteración de la etapa de implementación`;
}

//No s[e]

var aumentar = document.querySelector('#aumentar');
var disminuir = document.querySelector('#disminuir');
var iteracion = 2;
var plus = false;

aumentar.addEventListener('click', () => {
    iteracion++;
    randomNum++;
    plus = true;
    renderizeData(plus);
    console.log(randomNum);
});

disminuir.addEventListener('click', () => {
    if (randomNum <= 0) {
        randomNum = 0;
        fecha.innerHTML = '31/05/2022';
        presupuesto.innerHTML = `${(randomVal*(randomNum))} `;
        tiempo.innerHTML = `${randomNum} Meses`;
        proyecto.innerHTML = '01';
        descripcion.innerHTML = ``;
        etapa.innerHTML = ``;
        metodologia.innerHTML = ``;
        herramientas.innerHTML = ``;
    } else{

        iteracion++;
        randomNum--;
        plus = false;
        renderizeData(plus);
        console.log(randomNum);
    }
});
