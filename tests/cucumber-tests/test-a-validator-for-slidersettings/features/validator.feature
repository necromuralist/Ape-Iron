Feature: Validator

Scenario: The expected number is a number.

Given a Validator
When is_a_number is given a number
Then nothing happens.

Scenario: The expected number isn't a number.

Given a Validator
When an expected number isn't actually a number
Then it throws an Error.

Scenario: The expected number wasn't assigned.

Given a Validator
When an expected number isn't assigned
Then it throws an Error.

Scenario: The variable has a value set.

Given a Validator
When is_set is given a variable that's set
Then nothing happens.

Scenario: The variable is empty.

Given a Validator
When is_set is given an empty variable
Then it throws an Error.

Given a Validator
When is_set is given an undefined variable
Then it throws an Error.

Scenario: The variable has an integer

Given a Validator
When is_an_integer is given a variable with an integer
Then nothing happens.

Scenario: The variable has a string

Given a Validator
When is_an_integer is given a string
Then it throws an Error.

Scenario: "is_an_integer" is given a float.

Given a Validator
When is_an_integer is given a float
Then it throws an Error.

Scenario: A valid ID is given.

Given a Validator
When is_an_element_id is given a valid element ID
Then nothing happens.
