import { Greeter } from "../src/Greeter";

describe("Greeter class", () => {
  test("the name property is set from the parameter", () => {
    const greeter: Greeter = new Greeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("greet method works", () => {
    const greeter: Greeter = new Greeter("Hello");
    expect(greeter.greet("Stein")).toBe("Hello, Stein!");
  });
});
