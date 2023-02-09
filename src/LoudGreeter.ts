import { Greeter } from "./Greeter";

export class LoudGreeter extends Greeter {
  private extra: string = "!";
  constructor(greeting: string) {
    super(greeting);
  }
  addVolume(): void {
    this.extra += "!";
  }
  greet(name: string): string {
    return `${this.greeting}, ${name}!${this.extra}`;
  }
}
