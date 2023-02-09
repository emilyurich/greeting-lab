import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeting class", () => {
  test("overridden greet method works", () => {
    const greeter: JavaScriptGreeter = new JavaScriptGreeter("Howdy");
    expect(greeter.greet("partner")).toBe(`console.log("Howdy, partner!")`);
  });
  test("overridden greet method works", () => {
    const greeter: JavaScriptGreeter = new JavaScriptGreeter("sup");
    expect(greeter.greet("playa")).toBe(`console.log("sup, playa!")`);
  });
});
