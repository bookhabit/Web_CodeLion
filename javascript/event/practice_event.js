// document.getElementById("btn").addEventListener("click", function () {
//   console.log("click!");
// });
let num = 0;
const plus = document
  .getElementById("plus")
  .addEventListener("click", function () {
    num++;
    document.getElementById("num").innerHTML = num;
  });

const minus = document
  .getElementById("minus")
  .addEventListener("click", function () {
    num--;
    document.getElementById("num").innerHTML = num;
  });

document.querySelector(".bar").addEventListener("click", () => {
  document.querySelector(".bar").innerHTML = "눌렸어";
  document.querySelector(".newBar").classList.toggle("show");
});
