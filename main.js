var fecha = document.querySelector('#fecha');
var presupuesto = document.querySelector('#presupuesto');
var tiempo = document.querySelector('#tiempo');
var proyecto = document.querySelector('#proyecto');
var descripcion = document.querySelector('#descripcion');
var etapa = document.querySelector('#etapa');
var metodologia = document.querySelector('#metodologia');
var herramientas = document.querySelector('#herramientas');





window.onload = () => {
    fecha.innerHTML = '26/05/2022';
    presupuesto.innerHTML = `${Math.floor(Math.random() * 3000000)+1} `;
    tiempo.innerHTML = `${Math.floor(Math.random() * 6)+1} Meses`;
    proyecto.innerHTML = '01';
    descripcion.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit accusantium nisi deserunt cupiditate repellendus magnam illo! Ipsa fuga vero deleniti minima. Eos nam quod ea similique eligendi iure delectus.';
    etapa.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa consectetur iste architecto odit quis voluptas doloremque odio nulla, tenetur totam neque cumque? Obcaecati cumque, at accusantium excepturi error magnam beatae.';
    metodologia.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore provident tempore veritatis quo quaerat, rem nisi quod voluptatem, aliquid id eveniet expedita saepe dolor aperiam odit distinctio cum eligendi impedit.';
    herramientas.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem optio ad sit voluptatibus temporibus. Placeat ducimus molestias veniam similique, totam debitis minus neque asperiores velit alias? Dolore ipsa aliquid ullam?';
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
