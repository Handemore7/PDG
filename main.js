var fecha = document.querySelector('#fecha');
var presupuesto = document.querySelector('#presupuesto');
var tiempo = document.querySelector('#tiempo');
var proyecto = document.querySelector('#proyecto');
var descripcion = document.querySelector('#descripcion');
var etapa = document.querySelector('#etapa');
var metodologia = document.querySelector('#metodologia');
var herramientas = document.querySelector('#herramientas');





window.onload = () => {
    let randomNum = Math.floor(Math.random() * 6)+1;
    let randomVal = Math.floor(Math.random() * 3000000)+1;

    fecha.innerHTML = '26/05/2022';
    presupuesto.innerHTML = `${randomVal} `;
    tiempo.innerHTML = `${randomNum} Meses`;
    proyecto.innerHTML = '01';
    descripcion.innerHTML = `Proyecto de tipo economico, con ${randomNum} meses de tiempo esperado, se estima aproximadamente un gasto de ${randomVal}`;
    etapa.innerHTML = `Actualmente se encuentra en una etapa de Ideación, a partir de aqui debe seguir el ciclo, continuando con prototipar -> testear -> implementar, y volver a iterar todo el proceso desde la primera etapa.`;
    metodologia.innerHTML = `Cada etapa tendrá una duración de 1 sprint, el cual constará de 10 días, teniendo en 3 meses un total de 9 sprints, por lo cual teniendo en cuenta que se empieza en la etapa de Ideación, se espera en 3 meses haber pasado por todas las etapas y terminar en la segunda iteración de la etapa de implementación`;
}

// A partir de aqui es lo del "slider"

var opt1 = document.querySelector('#option1');
var opt2 = document.querySelector('#option2');
var opt3 = document.querySelector('#option3');
var img = document.querySelector('#sliderImg');

opt1.addEventListener('click', () => {
    img.setAttribute("src","./src/slide1.png");
    opt1.classList.toggle('DTchart__list__option--selected');
    if (opt2.classList.contains("DTchart__list__option--selected")) {
        opt2.classList.toggle('DTchart__list__option--selected');
    }
    if (opt3.classList.contains("DTchart__list__option--selected")) {
        opt3.classList.toggle('DTchart__list__option--selected');
    }
});
opt2.addEventListener('click', () => {
    img.setAttribute("src","./src/slide2.png");
    opt2.classList.toggle('DTchart__list__option--selected');
    if (opt1.classList.contains("DTchart__list__option--selected")) {
        opt1.classList.toggle('DTchart__list__option--selected');
    }
    if (opt3.classList.contains("DTchart__list__option--selected")) {
        opt3.classList.toggle('DTchart__list__option--selected');
    }
});
opt3.addEventListener('click', () => {
    img.setAttribute("src","./src/slide3.png");
    opt3.classList.toggle('DTchart__list__option--selected');
    if (opt1.classList.contains("DTchart__list__option--selected")) {
        opt1.classList.toggle('DTchart__list__option--selected');
    }
    if (opt2.classList.contains("DTchart__list__option--selected")) {
        opt2.classList.toggle('DTchart__list__option--selected');
    }
});

