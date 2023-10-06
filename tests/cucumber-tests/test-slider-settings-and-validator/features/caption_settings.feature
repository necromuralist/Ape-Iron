Feature: Settings for a caption/label.

Scenario: The CaptionSettings is built.
Given a CaptionSettings
When the properties are checked
Then they are the expected properties.

Scenario: check_rep is called.

Given a CaptionSettings
When CaptionSettings.check_rep is called

Then it checks the label

And it checks the precision

And it checks the caption div ID.
