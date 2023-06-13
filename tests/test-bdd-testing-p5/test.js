"use strict";

const expect = require("chai").expect;
const sinon = require("sinon");

const ColorIncreaser = require('../../files/posts/bdd-testing-p5/color-increaser');

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

describe('Given the ColorIncreaser class definition', function() {
  const [RGB_MIN, RGB_MAX ]= [0, 255];
  const [RED, GREEN, BLUE, ALPHA] = [0, 1, 2, 3];
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

  describe("When the ColorIncreaser is constructed",
            function() {
    it ("Then it should be an object", function(done) {
      expect(color_increaser).to.be.a('object');
      done();
    });

    it("And it should set the color_increment",
       function(done){
         expect(color_increaser.color_increment).to.equal(COLOR_INCREMENT);
         done();
       });

    it("And set the color attribute",
      function(done){
        expect(color_increaser.color).to.be.eql(color_mock);
        done();
      });
  }); // end test constructor

  describe("And when the increase() method is called", function() {
    it ("Then it should increment red up until 255",
        function(done){
          for (let count=RGB_MIN; count < RGB_MAX; count +=1) {
            color_increaser.increase();
          }
          let expected = [RGB_MAX, RGB_MIN, RGB_MIN, RGB_MAX]
    
          CHANNELS.forEach((channel, index) => expect(
            color_increaser.color.levels[channel]).to.equal(expected[index]));
    
          done();
        });

    it ("But red should wrap-around to 0 when it hits 256 and increment green",
        function(done) {
          color_increaser.color.levels[RED] = RGB_MAX;
          color_increaser.increase();
          let expected = [RGB_MIN, COLOR_INCREMENT,
                          RGB_MIN, RGB_MAX];
          CHANNELS.forEach((channel, index) => expect(
            color_increaser.color.levels[channel]).to.equal(expected[index]));
          done();
        });

    it("And it should wrap-around green and increase blue if green exceeds 255",
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
       });

    it("And it should wrap-around all colors when blue exceeds 255",
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
       });
  }); // end test increase

  describe("And when the next() method is called", function() {
    it("Then it should increase the color",
      function(done) {
        let spy = sinon.spy(color_increaser, "increase");
        color_increaser.next();
        expect(spy.calledOnce).to.be.true;
        spy.restore();
        done();
      });

    it ("And return the color",
        function(done) {
          let actual = color_increaser.next();
          expect(color_increaser.color).to.be.eql(actual);
          done();
        });
  }); // end next method tests
}); // end test color incrementer
