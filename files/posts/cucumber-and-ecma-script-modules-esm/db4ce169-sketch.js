const GREETINGS_DIV = "db4ce169-greetings-sketch";

import { Greeter } from "./greetings.js"

function greetings_sketch(p5js) {
  p5js.setup = function() {
    p5js.createCanvas(175, 50);
    p5js.background("gainsboro");
    p5js.textSize(32);
    p5js.fill(0, 103, 153);
    let peter_the_greeter_says = new Greeter();    
    p5js.text(peter_the_greeter_says.greetings(), 10, 30);
    p5js.noLoop();
  };// setup
}; // greetings_sketch

new p5(greetings_sketch, GREETINGS_DIV);
