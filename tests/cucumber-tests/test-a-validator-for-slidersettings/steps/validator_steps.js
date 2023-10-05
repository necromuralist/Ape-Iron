import { expect } from "chai";
import { faker } from "@faker-js/faker";
import { Given, When, Then } from "@cucumber/cucumber";
import { JSDOM } from "jsdom";

// Software Under Test

import { Validator } from "../../../../javascript/validator.js"

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
  
// Given a Validator

When("is_a_number is given a number", function() {
  this.validate.is_a_number("good-number", faker.number.float());
  this.validate.is_a_number("good-number", 0);
});

Then("nothing happens.", function() {});

// Given a Validator

When("an expected number isn't actually a number", function() {
  this.bad_call = function() {    
      this.validate.is_a_number("bad-number", faker.lorem.word());
  };
});

Then("it throws an Error.", function() {
  expect(this.bad_call.bind(this)).to.throw(Error);
});

// Given a Validator

When("an expected number isn't assigned", function() {
  this.bad_call = function() {
    this.validate.is_a_number("no-number", null);
  };
});

// Then it throws an error

// Given a Validator

When("is_set is given a variable that's set", function() {
  this.validate.is_set("set-variable", faker.lorem.word());
  this.validate.is_set("set-variable", 0);
  this.validate.is_set("set-variable", false);
});

// Then nothing happens.

// Given a Validator

When("is_set is given an empty variable", function() {
  this.bad_call = function() {
    this.validate.is_set(null);
  };
});

// Then it throws an Error.

// Given a Validator

When("is_set is given an undefined variable", function() {
  this.bad_call = function() {
    this.validate.is_set(undefined);
  };
});

// Then it throws an Error.

// Given a Validator

When("is_an_integer is given a variable with an integer", function() {
  this.validate.is_an_integer("is-integer", faker.number.int());
  this.validate.is_an_integer("is-integer", 1.0);
});

// Then nothing happens

// Given a Validator

When("is_an_integer is given a string", function() {
  this.bad_call = function() {
    this.validate.is_an_integer("not-integer", `${faker.number.int()}`);
  };
});

// Then it throws an Error.

// Given a Validator

When("is_an_integer is given a float", function() {
  this.bad_call = function() {
    this.validator.is_an_integer("float-not-integer", 5.5);
  };
});

// Then it throws an Error.

// Given a Validator

When("an expected integer wasn't set", function() {
  this.bad_call = function() {
      this.validate.is_an_integer("no-integer", null);
  };
});

// Then it throws an Error.

// Given a Validator

When("is_an_element_id is given a valid element ID", function() {
  this.validate.is_an_element_id("good-id", VALID_ID);
});

// Then nothing happens.

// Given a Validator

When("is_an_element is given an invalid element ID", function() {
  this.bad_call = function() {
    this.validate.is_an_element_id("bad-id", VALID_ID + "invalid");
  };
});

// Then it throws an Error.
