/* describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
}); */


const { Activity, Repository } = require("../scripts/index")

describe("La clase Repository", () => {
  it("Debe ser una clase", () => {
    expect(Repository).toBeDefined();
    expect(Activity).toBeDefined();
  });

  it("Debe crear instancias que sean objetos", () => {
    const newInstance = new Activity();
    const object = {};
    expect(typeof newInstance).toEqual(typeof object);
  });
});







