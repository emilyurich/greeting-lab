import { JavaScriptGreeter } from "../src/JavaScriptGreeter";
import { LoudGreeter } from "../src/LoudGreeter";
describe("CloudGreeter class", () => {
  test("add extra !", () => {
    const greeter: LoudGreeter = new LoudGreeter("hi");
    expect(greeter.greet("friend")).toBe("hi, friend!!");
  });
  test("add extra !", () => {
    const greeter: LoudGreeter = new LoudGreeter("hi");
    greeter.addVolume();
    let result = greeter.greet("friend");
    expect(result).toBe("hi, friend!!!");
  });
});
