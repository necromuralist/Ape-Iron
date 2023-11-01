Feature: A Slidini class to hold a slider and its caption.

Scenario: The Slidini is built
Given a Slidini
When the settings and p5 are checked
Then they are the expected slider and caption settings and p5 instance

Scenario: The caption is gotten
Given a Slidini
When the caption is gotten
Then the caption is the expected one

Scenario: The update_caption method is called
Given a Slidini
When the update_caption method is called
Then the caption got the expected arguments

Scenario: The slider is gotten
Given a Slidini
When the slider is gotten
Then the expected calls were made to create the slider
