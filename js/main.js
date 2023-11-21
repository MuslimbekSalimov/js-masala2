var elForm = document.querySelector(".form")
var elInput = document.querySelector(".input")
var elPeshkom = document.querySelector(".peshkom__text")
var elGelik = document.querySelector(".gelik__text")
var elMoshina = document.querySelector(".mashina__text")
var elSamalyot = document.querySelector(".samalyot__text")


var peshkom = 3.6;
var gelik = 20.1;
var moshina = 70;
var samalyot = 800;

function speedHack(num = 0) {
 



    return speedHack
}


elForm.addEventListener("submit", function(evt) {
    evt.preventDefault()

    var input = Number(elInput.value.trim())

    var Piyoda = peshkom * 60;
    var Velik = gelik * 60;
    var Mashina = moshina * 60;
    var Samalyot = samalyot * 60

    if (Piyoda * input) {
        elPeshkom.textContent = Piyoda % input
    }
    
    if (Velik * input) {
        elGelik.textContent = Velik % input
    }

    if (Mashina * input) {
        elMoshina.textContent = Mashina % input
    }

    if (Samalyot * input) {
        elSamalyot.textContent = Samalyot % input
    }
})