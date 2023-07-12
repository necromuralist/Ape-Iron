import { expect } from "chai";
import { Given, When, Then } from "@cucumber/cucumber";
import { Greeter } from  "../../../files/posts/cucumber-and-ecma-script-modules-esm/greetings.js";

Given("a greeter", function() {
  this.greeter = new Greeter();
});

When("the greeter greets me", function () {
  this.is_what_i_heard = this.greeter.greetings();
});

Then("I should hear {string}",
  function (what_he_should_have_said) {
    expect(this.is_what_i_heard).to.equal(what_he_should_have_said);
  }
);
