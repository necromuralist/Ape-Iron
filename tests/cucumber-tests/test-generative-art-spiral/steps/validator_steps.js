import { expect } from "chai";
import { faker } from "@faker-js/faker";
import { Given, When, Then } from "@cucumber/cucumber";
import { JSDOM } from "jsdom";

// Software Under Test

import { Validator } from "../../../../files/posts/generative-art-spiral/validator.js"

// a fake document
const VALID_ID = "validator-id";

const document = new JSDOM(`
<html>
<head></head>
<body>
 <div id=${VALID_ID}></div>
</body>
</html>
`).window.document;


Given("a Validator", function() {
  this.validate = new Validator(document);
});

// Scenario: The expected number is a number.
When("a number is checked", function() {
  this.validate.is_a_number("good-number", faker.number.float());
    this.validate.is_a_number("good-number", 0);
});

Then("nothing happens.", function() {
  
});

// Scenario: The expected number isn't a number.
When("an expected number isn't actually a number", function() {
  this.bad_call = function() {
      this.validate.is_a_number("bad-number", "ape");
  };
});

Then("it throws an Error.", function() {
  expect(this.bad_call.bind(this)).to.throw(Error);
});

//Scenario: The variable has a value set.
When("a variable is checked", function() {
  const variable = "ape";
  this.validate.is_set("set-variable", variable);
  this.validate.is_set("set-variable", 0);
  this.validate.is_set("set-variable", false);
});

// Scenario: The variable is empty.
When("an empty variable is checked", function() {
  this.bad_call = function() {
    this.validate.is_set(null);
  };
});

// Scenario: Scenario: The variable has an integer
When("a variable with an integer is checked", function() {
  this.validate.is_an_integer("is-integer", faker.number.int());
});

// Scenario: The variable doesn't have an integer
When("a variable has something other than an integer", function() {
  this.bad_call = function() {
    this.validate.is_an_integer("not-integen", "5");
  };
});

// Scenario: A valid ID is given.
When("a valid element ID is given", function() {
  this.validate.is_an_element_id("good-id", VALID_ID);
});

// Scenario: An invalid ID is given.
When("an invalid element ID is given", function() {
  this.bad_call = function() {
    this.validate.is_an_element_id("bad-id", VALID_ID + "invalid");
  };
});
