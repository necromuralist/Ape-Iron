const assert = require( "assert");
const When = require("@cucumber/cucumber").When;
const Then = require("@cucumber/cucumber").Then;
const Greeter = require( "../../../files/posts/cucumber-and-ecma-script-modules-esm/greetings.js");

When("the greeter says hello", function () {
  this.whatIHeard = new Greeter().sayHello();
});

Then(
  "I should have heard {string}",
  function (expectedResponse) {
    assert.equal(this.whatIHeard, expectedResponse);
  }
);
