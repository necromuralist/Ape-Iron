import { expect } from "chai";
import { faker } from "@faker-js/faker";
import { Given, When, Then } from "@cucumber/cucumber";
import { fake, replace } from "sinon";

import { CaptionSettings } from "../../../../javascript/slider.js";
import { Validator } from "../../../../javascript/validator.js";

const CAPTION_IS = {
  SET: {
    label: 0
  },
  INTEGER: {
    precision: 0
  },
  ELEMENT: {
    caption_div: 0
  }
};

const METHODS = ["is_a_number", "is_set", "is_an_integer", "is_an_element_id"];

Given("a CaptionSettings", function() {

  this.label = faker.lorem.words();
  this.precision = faker.number.int();
  this.caption_div = faker.lorem.word();

  this.validator = new Validator({});
  
  for (const method of METHODS) {
      replace(this.validator, method,
            fake.returns(null));    
  }

  this.caption_settings = new CaptionSettings(this.label,
                                              this.precision,
                                              this.caption_div,
                                              this.validator);
});

When("the properties are checked", function() {
  this.actual_label = this.caption_settings.label;
  this.actual_precision = this.caption_settings.precision;
  this.actual_caption_div = this.caption_settings.caption_div;
});

Then("they are the expected properties.", function() {
  expect(this.actual_label).to.equal(this.label);
  expect(this.actual_precision).to.equal(this.precision);
  expect(this.actual_caption_div).to.equal(this.caption_div);
});

When("CaptionSettings.check_rep is called", function() {
  this.caption_settings.check_rep();
});


Then("it checks the label", function() {
  expect(this.validator.is_set.getCall(CAPTION_IS.SET.label).calledWith(
    "label", this.label
  )).to.be.true;  
});

Then("it checks the precision", function() {
  expect(this.validator.is_an_integer.getCall(CAPTION_IS.INTEGER.precision).calledWith(
    "precision", this.precision
  )).to.be.true;  
});

Then("it checks the caption div ID.", function() {
  expect(this.validator.is_an_element_id.getCall(
    CAPTION_IS.ELEMENT.caption_div).calledWith(
      "caption_div", this.caption_div
    )).to.be.true;  
});
