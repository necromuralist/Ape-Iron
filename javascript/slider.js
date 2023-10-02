class SliderSettings {
  constructor(min, max, default_value, step_size,
              label, precision,
              slider_div, caption_div,
              validator, document) {
    this.min = min;
    this.max = max;
    this.default_value = default_value;
    this.step_size = step_size;
    this.label = label;
    this.precision = precision;
    this.slider_div = slider_div;
    this.caption_div = caption_div;
    this.confirm = validator;
    this.document = document;
  }; // constructor

  check_rep(){
    this.confirm.is_a_number("min", this.min);
    this.confirm.is_a_number("max", this.max);
    this.confirm.is_a_number("default_value", this.default_value);
    this.confirm.is_a_number("step_size", this.step_size);
    this.confirm.is_set("label", this.label);
    this.confirm.is_an_integer("precision", this.precision);
    this.confirm.is_an_element_id("slider_div", this.slider_div);
    this.confirm.is_an_element_id("caption_div", this.caption_div);
  }; // check_rep
}; // SliderSettings

export { SliderSettings }
