"use strict";

const expect = require("chai").expect;
const sinon = require("sinon");
global.p5 = sinon.stub();

const ColorIncreaser = require('../../files/posts/bdd-testing-p5/sketch');

class MockColor {
  constructor(red, green, blue, alpha){
    this.levels = [
      red,
      green,
      blue,
      alpha
      ]
  } // end constructor
 }// end mock_color

describe('ColorIncreaser tests', function() {
  const RGB_MIN = 0;
  const RGB_MAX = 255;
  const RED = 0;
  const GREEN = 1;
  const BLUE = 2;
  const ALPHA = 3;
  const CHANNELS = [RED, GREEN, BLUE, ALPHA];
  const COLOR_INCREMENT = 1;
  
  let color_increaser;
  let color_mock;
  
  beforeEach(function() {
    color_mock = new MockColor(RGB_MIN, RGB_MIN,
                               RGB_MIN, RGB_MAX);
    color_increaser = new ColorIncreaser(COLOR_INCREMENT,
                                         color_mock);
  });
    it('should be an object', function(done) {
      expect(color_increaser).to.be.a('object');
      done();
    });
 
  it("should set the color_increment",
     function(done){
       expect(color_increaser.color_increment).to.equal(COLOR_INCREMENT);
       done();
     }
    )
  
  it("should set the color object",
    function(done){
      expect(color_increaser.color).to.be.eql(color_mock);
      done();
    }
  )

  it ("should increment red only up until 255",
      function(done){
        for (let count=RGB_MIN; count < RGB_MAX; count +=1) {
          color_increaser.increase();
        }
        let expected = [RGB_MAX, RGB_MIN, RGB_MIN, RGB_MAX]
        
        CHANNELS.forEach((channel, index) => expect(
          color_increaser.color.levels[channel]).to.equal(expected[index]));
  
        done();
      }
     )

  it ("should wrap red when it hits 256",
      function(done) {
        color_increaser.color.levels[RED] = RGB_MAX;
        color_increaser.increase();
        let expected = [RGB_MIN, COLOR_INCREMENT,
                        RGB_MIN, RGB_MAX];
        CHANNELS.forEach((channel, index) => expect(
          color_increaser.color.levels[channel]).to.equal(expected[index]));
        done();
      }
     );

  it("should wrap green and increase blue if green exceeds 255",
     function(done) {
       color_increaser.color.levels[RED] = RGB_MAX;
       color_increaser.color.levels[GREEN] = RGB_MAX;
       
       color_increaser.increase();
       
       let expected = [RGB_MIN, RGB_MIN,
                       COLOR_INCREMENT, RGB_MAX];
       
        CHANNELS.forEach((channel, index) => expect(
          color_increaser.color.levels[channel]).to.equal(
            expected[index]));
      done();
     }
    );

  it("should wrap all colors when blue exceeds 255",
     function(done) {
       CHANNELS.forEach(
         channel => color_increaser.color.levels[channel] = RGB_MAX);
  
       color_increaser.increase();
       
       let expected = [RGB_MIN, RGB_MIN, RGB_MIN,
                       RGB_MAX];
       
        CHANNELS.forEach((channel, index) => expect(
          color_increaser.color.levels[channel]).to.equal(
            expected[index]));
       
      done();
     }
    );
}); // end test color incrementer
