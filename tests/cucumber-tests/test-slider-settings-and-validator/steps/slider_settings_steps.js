import { expect } from "chai";
import { faker } from "@faker-js/faker";
import { Given, When, Then } from "@cucumber/cucumber";
import { fake, replace } from "sinon";
import { SliderSettings } from "../../../../files/javascript/slider.js";
import { Validator } from "../../../../files/javascript/validator.js";

const IS = {
  NUMBER: { min: 0,
            max: 1,
            default_value : 2,
            step_size: 3,               
          },
  ELEMENT: {
    slider_div: 0,
  }
};

const METHODS = ["is_a_number", "is_set", "is_an_integer", "is_an_element_id"];
  
Given("a Slider Settings", function() {
  this.validator = new Validator({});

  for (const method of METHODS) {
      replace(this.validator, method,
            fake.returns(null));    
  }

  this.min = faker.number.float();
  this.max = faker.number.float();
  this.default_value = faker.number.float();
  this.step_size = faker.number.float();
  this.slider_div = faker.lorem.word();

  this.settings = new SliderSettings(this.min,
                                     this.max,
                                     this.default_value,
                                     this.step_size,
                                     this.slider_div,
                                     this.validator);
  });

When("check_rep is called", function() {
  this.settings.check_rep();
});

// Given a Slider Settings
// When check_rep is called

Then("it checked the min", function() {
  expect(this.validator.is_a_number.getCall(IS.NUMBER.min).calledWith(
    "min", this.min
  )).to.be.true;  
});

Then("it checked the max", function() {
  expect(this.validator.is_a_number.getCall(IS.NUMBER.max).calledWith(
    "max", this.max
  )).to.be.true;
});

Then("it checked the default_value", function() {
  expect(this.validator.is_a_number.getCall(IS.NUMBER.default_value).calledWith(
    "default_value", this.default_value
  )).to.be.true;
});

Then("it checked the step_size", function() {
  expect(this.validator.is_a_number.getCall(IS.NUMBER.step_size).calledWith(
    "step_size", this.step_size
  )).to.be.true;
});





Then("it checked the slider_div", function() {
  expect(this.validator.is_an_element_id.getCall(IS.ELEMENT.slider_div).calledWith(
    "slider_div", this.slider_div
  )).to.be.true;
});
