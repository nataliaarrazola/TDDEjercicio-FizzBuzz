import fizzbuzz from "./fizzbuzz.js";

const inputNumero = document.querySelector("#primer-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const numero = Number.parseInt(inputNumero.value);
  div.innerHTML = "<p>" + fizzbuzz(numero) + "</p>";
});