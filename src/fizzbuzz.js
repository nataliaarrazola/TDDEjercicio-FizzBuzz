function fizzbuzz(numero) {
  if (numero % 3 === 0) {
    return "Fizz";
  }
  return numero.toString();
}

export default fizzbuzz;