Feature: Slider Settings

# Min
Scenario: The min isn't set.

Given a Slider Settings
When it has no min
And check_rep is called later
Then it should raise an exception.

Scenario: The min isn't numeric.

Given a Slider Settings
When it has a non-numeric min
And check_rep is called later
Then it should raise an exception.

Scenario: The min is valid
Given a Slider Settings
When it has a valid min
And check_rep is called
Then nothing should happen.

# Max
Scenario: The max isn't set.

Given a Slider Settings
When it has no max
And check_rep is called later
Then it should raise an exception.

Scenario: The max isn't numeric.

Given a Slider Settings
When it has a non-numeric max
And check_rep is called later
Then it should raise an exception.

Scenario: The max is valid.
Given a Slider Settings
When it has a valid max
And check_rep is called
Then nothing should happen.

# Default Value
Scenario: The default value isn't set.

Given a Slider Settings
When it has no default value
And check_rep is called later
Then it should raise an exception.

Scenario: The default value isn't numeric.

Given a Slider Settings
When it has a non-numeric default value
And check_rep is called later
Then it should raise an exception.

Scenario: The default value is valid.
Given a Slider Settings
When it has a valid default value
And check_rep is called
Then nothing should happen.

# Step Size
Scenario: The step size isn't set.

Given a Slider Settings
When it has no step size
And check_rep is called later
Then it should raise an exception.

Scenario: The step size isn't numeric.

Given a Slider Settings
When it has a non-numeric step size
And check_rep is called later
Then it should raise an exception.

Scenario: The step size is valid.
Given a Slider Settings
When it has a valid step size
And check_rep is called
Then nothing should happen.

Scenario: The label isn't set.

Given a Slider Settings
When it has no label
And check_rep is called later
Then it should raise an exception.

# Precision
Scenario: The precision isn't set.

Given a Slider Settings
When it has no precision
And check_rep is called later
Then it should raise an exception.

Scenario: The precision isn't an integer.

Given a Slider Settings
When it has a non-integer precision
And check_rep is called later
Then it should raise an exception.

Scenario: The precision is valid.
Given a Slider Settings
When it has a valid precision
And check_rep is called
Then nothing should happen.

# slider div

Scenario: The slider div is invalid

Given a Slider Settings
When it has an invalid slider div
And check_rep is called later
Then it should raise an exception.

# caption div

Given a Slider Settings
When it has an invalid caption div
And check_rep is called later
Then it should raise an exception.
