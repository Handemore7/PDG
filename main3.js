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