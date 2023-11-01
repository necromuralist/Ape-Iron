class SliderSettings {
  constructor(min, max, default_value, step_size,
              slider_div,
              validator) {
    this.min = min;
    this.max = max;
    this.default_value = default_value;
    this.step_size = step_size;
    this.slider_div = slider_div;
    this.confirm = validator;
  }; // constructor

  check_rep(){
    this.confirm.is_a_number("min", this.min);
    this.confirm.is_a_number("max", this.max);
    this.confirm.is_a_number("default_value", this.default_value);
    this.confirm.is_a_number("step_size", this.step_size);
    this.confirm.is_an_element_id("slider_div", this.slider_div);
  }; // check_rep
}; // SliderSettings


class CaptionSettings {
  _div_selector = null;
  
  constructor(label, precision, caption_div, validator) {
    this.label = label;
    this.precision = precision;
    this.caption_div = caption_div;
    this.validator = validator;
  };

  get div_selector(){
    if (this._div_selector === null) {
      this._div_selector = "#" + this.caption_div;
    }
    return this._div_selector;
  };

  check_rep() {
    this.validator.is_set("label", this.label);
    this.validator.is_an_integer("precision", this.precision);
    this.validator.is_an_element_id("caption_div", this.caption_div);
 };
}; // CaptionSettings

export { SliderSettings, CaptionSettings }
