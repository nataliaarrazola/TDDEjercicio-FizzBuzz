import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia generar el mismo numero si no sigue una regla", () => {
  expect(fizzbuzz(2)).toEqual("2");
  });
});

describe("FizzBuzz", () => {
  it("deberia generar '1' si se ingresa 1", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });
});