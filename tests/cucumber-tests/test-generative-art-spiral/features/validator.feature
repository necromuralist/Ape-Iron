Feature: Validator

# is_a_number
Scenario: The expected number is a number.

Given a Validator
When a number is checked
Then nothing happens.

Scenario: The expected number isn't a number.

Given a Validator
When an expected number isn't actually a number
Then it throws an Error.

# is_set
Scenario: The variable has a value set.

Given a Validator
When a variable is checked
Then nothing happens.

Scenario: The variable is empty.

Given a Validator
When an empty variable is checked
Then it throws an Error.

# is_integer
Scenario: The variable has an integer

Given a Validator
When a variable with an integer is checked
Then nothing happens.

Scenario: The variable doesn't have an integer

Given a Validator
When a variable has something other than an integer
Then it throws an Error.

# is_id
Scenario: A valid ID is given.

Given a Validator
When a valid element ID is given
Then nothing happens.

Scenario: An invalid ID is given.

Given a Validator
When an invalid element ID is given
Then it throws an Error.
