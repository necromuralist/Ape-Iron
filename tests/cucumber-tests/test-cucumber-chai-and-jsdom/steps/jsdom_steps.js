import { expect } from "chai";
import { Given, When, Then } from "@cucumber/cucumber";
import { JSDOM } from "jsdom";

import { ElementGetter } from "../../../../files/posts/cucumber-chai-and-jsdom/puller.js";


const EXPECTED_ID = "expected-div";
const window = (new JSDOM(`<html>
<head></head>
<body>

  <div id='${EXPECTED_ID}'></div>

</body></html>`)).window;

const document = window.document;

  
/* the valid getter */
Given("an ElementGetter with the correct ID", function() {
  this.puller = new ElementGetter(EXPECTED_ID, document);
});

/** the right ID **/


When("the element is retrieved", function() {
  this.actual_element = this.puller.element;
});
  
Then("it is the expected element.", function() {
  expect(this.actual_element.id).to.equal(EXPECTED_ID);
});
/** the wrong ID **/
Given("an ElementGetter with the wrong ID", function() {
  this.puller = new ElementGetter(EXPECTED_ID + "abc", document);
  });
  


When("the element is retrieved using the wrong ID", function() {
  this.bad_call = function(){
    this.puller.element
  }
});

Then("it throws an error.", function() {
  expect(this.bad_call).to.throw(Error);
});
