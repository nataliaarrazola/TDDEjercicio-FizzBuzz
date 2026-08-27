import fizzbuzz from "./fizzbuzz.js";

const input = document.querySelector("#numero-input");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numero = Number.parseInt(input.value);
  div.innerHTML = "<p>" + fizzbuzz(numero) + "</p>";
});