import { Greeter } from "./Greeter";

export class HTMLGreeter extends Greeter {
  tagName: string;
  constructor(greeting: string, tagName: string = "h1") {
    super(greeting);
    this.tagName = tagName;
  }
  greet(name: string) {
    return `<${this.tagName}>${this.greeting}, ${name}!</${this.tagName}>`;
  }
}
