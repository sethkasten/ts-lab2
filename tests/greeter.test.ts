import { Greeter } from "../src/models/Greeter";
import { JavaScriptGreeter } from "../src/models/JavaScriptGreeter";
import { LoudGreeter } from "../src/models/LoudGreeter";
import { HTMLGreeter } from "../src/models/HTMLGreeter";

describe("Greeter class", () => {
  test("the constructor properly sets the greeting property", () => {
    const greeter = new Greeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("the constructor properly sets the greeting property", () => {
    const greeter = new Greeter("Mornin'");
    expect(greeter.greeting).toBe("Mornin'");
  });
});

describe("JavaScriptGreeter class", () => {
  test("the greet method returns the greeting inside a console.log text", () => {
    const jsgreeter = new JavaScriptGreeter("Hi");
    expect(jsgreeter.greet("Sean")).toBe("console.log('Hi, Sean!')");
  });
  test("the greet method returns the greeting inside a console.log text", () => {
    const jsgreeter = new JavaScriptGreeter("Evenin'");
    expect(jsgreeter.greet("Bob")).toBe("console.log('Evenin', Bob!')");
  });
});

describe("LoudGreeter class", () => {
  test("the greet method returns the greeting with 1 extra !", () => {
    const loudGreeter = new LoudGreeter("Henlo", "!");
    expect(loudGreeter.greet("Seth")).toBe("Henlo, Seth!!");
  });
  test("the greet method returns the greeting with 2 extra !", () => {
    const loudGreeter = new LoudGreeter("Hemlo", "!");
    loudGreeter.addVolume();
    expect(loudGreeter.greet("Jill")).toBe("Hemlo, Jill!!!");
  });
  test("the greet method returns the greeting with 3 extra !", () => {
    const loudGreeter = new LoudGreeter("GM", "!");
    loudGreeter.addVolume();
    loudGreeter.addVolume();
    expect(loudGreeter.greet("Mary")).toBe("GM, Mary!!!!");
  });
});

describe("HTMLGreeter class", () => {
  test("the greet method returns the greeting with h1 tag", () => {
    const newHTMLGreeter = new HTMLGreeter("Hola");
    expect(newHTMLGreeter.greet("Joe")).toBe("<h1>Hola, Joe!</h1>");
  });
  test("the greet method returns the greeting with h2 tag", () => {
    const newHTMLGreeter = new HTMLGreeter("Yo", "h2");
    expect(newHTMLGreeter.greet("Bill")).toBe("<h2>Yo, Bill!</h2>");
  });
  test("the greet method returns the greeting with div tag", () => {
    const newHTMLGreeter = new HTMLGreeter("Hey", "div");
    expect(newHTMLGreeter.greet("Jack")).toBe("<div>Hey, Jack!</div>");
  });
});
