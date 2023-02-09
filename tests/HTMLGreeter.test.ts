import { HTMLGreeter } from "../src/HTMLGreeter";

describe("Html class", () => {
  test("adding html tags", () => {
    const greeter: HTMLGreeter = new HTMLGreeter("h1", "wassup");
    expect(greeter.greet("gurl")).toBe("<h1>wassup, gurl!</h1>");
  });
});
