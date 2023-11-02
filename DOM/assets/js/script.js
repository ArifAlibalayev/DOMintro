const colorinp = document.getElementById("colorinp")
const widthinp = document.getElementById("widthinp")
const change = document.getElementById("change")
const container = document.getElementById("container")

change.addEventListener("click", function () {
    container.style.backgroundColor = colorinp.value
    container.style.width = widthinp.value + "px"

})


