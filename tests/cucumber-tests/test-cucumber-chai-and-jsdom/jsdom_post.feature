Feature: An Element Getter

Scenario: A Valid ID

Given an ElementGetter with the correct ID
When the element is retrieved
Then it is the expected element.

Scenario: The wrong ID.

Given an ElementGetter with the wrong ID
When the element is retrieved using the wrong ID
Then it throws an error.
