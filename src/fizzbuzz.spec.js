import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia generar el mismo numero si no sigue una regla", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });

  it("deberia generar '1' si se ingresa 1", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("deberia retornar 'Fizz' si se ingresa 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("deberia retornar 'Fizz' si se ingresa 6", () => {
  expect(fizzbuzz(6)).toEqual("Fizz");
  });

  it("deberia retornar 'Buzz' si se ingresa 5", () => {
  expect(fizzbuzz(5)).toEqual("Buzz");
  });

  it("deberia retornar 'Buzz' si se ingresa 10", () => {
  expect(fizzbuzz(10)).toEqual("Buzz");
  });
});