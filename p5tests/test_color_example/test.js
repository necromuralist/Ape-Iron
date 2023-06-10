"use strict";

const expect = require("chai").expect;
const sinon = require("sinon");
global.p5 = sinon.stub();

const ColorIncreaser = require('../../files/posts/bdd-testing-p5/sketch');

class MockColor {
  constructor(red, blue, green, alpha){
    this.levels = [
      red,
      blue,
      green,
      alpha
      ]
  } // end constructor
 }// end mock_color

describe('ColorIncreaser tests', function() {
  let color_increaser;
  let color_increment;
  let color_mock;
  
  beforeEach(function() {
    color_increment = Math.floor(Math.random() * 200);
    color_mock = new MockColor(0, 0, 0, 255);
    color_increaser = new ColorIncreaser(color_increment, color_mock);
  });
    it('should be an object', function(done) {
      expect(color_increaser).to.be.a('object');
      done();
    });
 
  it("should set the color_increment",
     function(done){
       expect(color_increaser.color_increment).to.be.equal(color_increment);
       done();
     }
    )
  
  it("should set the color object",
    function(done){
      expect(color_increaser.color).to.be.eql(color_mock);
      done();
    }
  )
}); // end test color incrementer
