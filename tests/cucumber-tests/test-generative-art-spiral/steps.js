import { JSDOM } from "jsdom";
const SLIDER_ID = "slider-div";
const CAPTION_ID = "caption-div";
global.document = new JSDOM(`<html>
<head></head>
<body>
<div id='${SLIDER_ID}'></div>
<div id='${CAPTION_ID}'></div>
</body></html>`).window.document;


import { expect } from "chai";
import { Given, When, Then } from "@cucumber/cucumber";
import { fake, replace } from "sinon";
import { SliderSettings } from "../../../files/posts/generative-art-spiral/slider.js";

/** min **/
/* not set */
Given("a Slider Settings", function() {
  this.settings = new SliderSettings(0, 5, 3, 1, "some label", 3, "slider-div", "caption-div");
});

When("it has no min", function() {
  this.settings.min = null;
});

When("check_rep is called later", function() {

});

Then("it should raise an exception.", function() {
  expect(this.settings.check_rep.bind(this.settings)).to.throw(Error);
});

/** non-numeric **/
When("it has a non-numeric min", function() {
  this.settings.min = "bob";
});

/** Valid **/
When("it has a valid min", function() {
});

When("check_rep is called", function() {
  this.settings.check_rep();
});

Then("nothing should happen.", function() {
  
});

/** Max **/

// no max
When("it has no max", function() {
  this.settings.max = null;
});

// The max isn't numeric.

When("it has a non-numeric max", function() {
  this.settings.max = "max";
});

// The max is valid.
When("it has a valid max", function() {
  this.settings.max = 20;
});

/** Default Value **/
// Scenario: The default value isn't set.
When("it has no default value", function() {
  this.settings.default_value = undefined;
});

// Scenario: The default value isn't numeric.
When("it has a non-numeric default value", function() {
  this.settings.default_value = "Bub";
});

// The default value is valid.
When("it has a valid default value", function() {
  this.settings.default_value = 5;
});

/** Step Size **/
// Scenario: The step size isn't set.
When("it has no step size", function() {
  this.settings.step_size = undefined;
});

// The step size is valid.
When("it has a valid step size", function() {
  this.settings.step_size = 0;
});

// Scenario: The step size isn't numeric.
When("it has a non-numeric step size", function() {
  this.settings.step_size = "Bub";
});

/** Label **/
// Scenario: The label isn't set.
When("it has no label", function() {
  this.settings.label = undefined;
});

/** Precision **/
// Scenario: The precision isn't set.
When("it has no precision", function() {
  this.settings.precision = undefined;
});

// Scenario: The precision isn't an integer.
When("it has a non-integer precision", function() {
  this.settings.precision = 5.5;
});

// Scenario: The precision is valid.
When("it has a valid precision", function() {

});

// slider div
// Scenario: The slider div is invalid
When("it has an invalid slider div", function() {
  this.settings.slider_div = "some id";
});

Then("the invalid id should raise an exception.", function() {
  let fake_function = fake.returns(null);
  replace(global.document, "getElementById", fake_function);
  expect(this.settings.check_rep.bind(this.settings)).to.throw(Error);
});

// caption div
// Scenario: The caption div is invalid
When("it has an invalid caption div", function() {
  this.settings.caption_div = "some id";
});
