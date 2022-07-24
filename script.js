let USDvalue = 4.64
let EURvalue = 4.74
let GBPvalue = 5.57
let EURoptionElement = document.querySelector(".js-form__option--EUR");
let USDoptionElement = document.querySelector(".js-form__option--USD");
let GBPoptionElement = document.querySelector(".js-form__option--GBP");
let valueElement = document.querySelector(".js-form__field--value");
let currencyElement = document.querySelector(".js-form__field--currency");
let sumElement = document.querySelector(".js-form__span");
let formElement = document.querySelector(".js-form");




formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    if (currencyElement.value === EURoptionElement.value) {
        sumElement.innerText = (+valueElement.value * EURvalue)
            .toFixed(2);
    }
    else if (currencyElement.value === USDoptionElement.value) {

        sumElement.innerText = (+valueElement.value * USDvalue)
            .toFixed(2);
    }
    else {
        sumElement.innerText = (+valueElement.value * GBPvalue)
            .toFixed(2);
    }
});
formElement.addEventListener( "reset", () => {
    sumElement.innerText = null



});



