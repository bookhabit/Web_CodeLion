document.querySelectorAll(".animal")[2].innerHTML = "dog";
const animals = document.getElementById("animals");
animals.innerHTML += "<li class='animal'>Cat</li>";

document.querySelectorAll(".box")[0].classList.add("purple");

document.querySelectorAll(".box")[0].classList.remove("purple");

document.querySelectorAll(".box")[0].classList.toggle("yellow");
