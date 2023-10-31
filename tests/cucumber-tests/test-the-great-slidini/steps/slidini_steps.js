import { expect } from "chai";
import { fake } from "sinon";
import { Given, When, Then } from "@cucumber/cucumber";

/** Software under test **/
import { Slidini } from "../../../../files/javascript/slidini.js";

/** Scenario: The Slidini is built **/
Given("a Slidini", function() {
  this.p5 = fake();
  
  this.settings = {min: 5,
                   max: 20,
                   default_value: 333,
                   step_size: 96,
                   caption_div: "doobedoobedo",
                   label: "mabel",
                   precision: 55};

  this.slider_settings = {
    min: this.settings.min,
    max: this.settings.max,
    default_value: this.settings.default_value,
    step_size: this.settings.step_size,
    slider_div: this.settings.slider_div,
  };

  this.caption_settings = {
    label: this.settings.label,
    precision: this.settings.precision,
    caption_div: this.settings.caption_div
  };
    
      
  this.slidini = new Slidini(this.slider_settings,
                             this.caption_settings,
                             this.p5);
});

When("the settings and p5 are checked", function() {
  this.actual_slider_settings = this.slidini.slider_settings;
  this.actual_p5 = this.slidini.p5;
});

Then("they are the expected slider and caption settings and p5 instance", function() {
  expect(this.actual_slider_settings).to.equal(this.slider_settings);
  expect(this.actual_p5).to.equal(this.p5);
});

/** Scenario: The caption is gotten **/

/* Given a Slidini */

When("the caption is gotten", function() {
  this.caption = fake();
  this.p5.select = fake.returns(this.caption);
  this.actual_caption = this.slidini.caption;
});

Then("the caption is the expected one", function() {
  expect(this.p5.select.calledWith(this.settings.caption_div)).to.be.true;
  expect(this.actual_caption).to.equal(this.caption);
});

When("the update_caption method is called", function() {
  this.caption = fake()
  this.caption.html = fake();
  this.slidini._caption = this.caption;

  this.slider = fake();
  this.slider_value = 84;
  this.toFixed = fake.returns(this.slider_value);
  this.fixer = { toFixed: this.toFixed };
  
  
  this.slider.value = fake.returns(this.fixer);
  this.slidini._slider = this.slider;
  this.caption_string = `${this.settings.label}: ${this.slider_value}`

  this.slidini.update_caption();
});

Then("the caption got the expected arguments", function(){
  expect(this.caption.html.calledWith(this.caption_string)).to.be.true;
  expect(this.slider.value.called).to.be.true;
  expect(this.toFixed.calledWith(this.settings.precision));
});

/** Scenario: The slider is gotten **/

//Given a Slidini

When("the slider is gotten", function() {
  this.update_caption = fake();
  this.slidini.update_caption  = this.update_caption;
 
  this.slider = fake();
  this.slider.parent = fake();
  this.slider.input = fake();

  this.p5.createSlider = fake.returns(this.slider);

  
  this.actual_slider = this.slidini.slider;
});

Then("the expected calls were made to create the slider", function() {
  expect(this.p5.createSlider.calledWith(
    this.settings.min,
    this.settings.max,
    this.settings.default_value,
    this.settings.step_size)).to.be.true;

  expect(this.slider.parent.calledWith(this.settings.slider_div)).to.be.true;
  expect(this.slider.input.called).to.be.true;
  expect(this.update_caption.called).to.be.true;
  expect(this.actual_slider).to.equal(this.slider);
});
