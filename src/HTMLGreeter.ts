import { Greeter } from "./Greeter";

export class HTMLGreeter extends Greeter {
  tagName: string;
  constructor(tagName: string = "h1", greeting: string) {
    super(greeting);
    this.tagName = tagName;
  }
  greet(name: string): string {
    return `<${this.tagName}>${this.greeting}, ${name}!</${this.tagName}>`;
  }
}
