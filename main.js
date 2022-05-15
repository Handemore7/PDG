var sliderMoney = document.querySelector(".slider_money");
var sliderTime = document.querySelector(".slider_time");
var precisionpercen = document.querySelector(".textInputAverage");

var initValMoney = 5;
var initValTime = 8;

sliderMoney.value = initValMoney;
sliderTime.value = initValTime;

sliderMoney.addEventListener('change', ()=>{document.querySelector('.textInputMoney').value=sliderMoney.value});
sliderTime.addEventListener('change', ()=>{document.querySelector('.textInputTime').value=sliderTime.value});

function changeOnInitialValueMoney(initValMoney, actualVal) {
    
}