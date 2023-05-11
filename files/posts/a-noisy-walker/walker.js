class NoiseWalker {
  constructor(p5) {
    this.p5 = p5
    this.position = p5.createVector(p5.width / 2, p5.height / 2);
    // Perlin noise x and y offset
    this.noff = p5.createVector(p5.random(1000), p5.random(1000));
  }

  display() {
    this.p5.strokeWeight(2);
    this.p5.fill("cornflowerblue");
    this.p5.stroke("black");
    this.p5.ellipse(this.position.x, this.position.y, 48, 48);
  }
  

  walk() {
    // Noise returns a value between 0 and 1
    this.position.x = this.p5.map(this.p5.noise(this.noff.x), 0, 1, 0, this.p5.width);
    this.position.y = this.p5.map(this.p5.noise(this.noff.y), 0, 1, 0, this.p5.height);
    this.noff.add(0.01, 0.01, 0);
  }
}
