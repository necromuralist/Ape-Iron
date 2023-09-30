class SliderSettings {
  constructor(min, max, default_value, step_size,
              label, precision,
              slider_div, caption_div) {
    this.min = min;
    this.max = max;
    this.default_value = default_value;
    this.step_size = step_size;
    this.label = label;
    this.precision = precision;
    this.slider_div = slider_div;
    this.caption_div = caption_div;
  }; // constructor

  throw_non_number(identifier, actual) {
    if ((!actual && actual !== 0) || isNaN(actual)) {
      throw Error(`"${identifier}" must be a number not "${actual}"`);
    };
  }; // throw_non_number

  throw_not_set(identifier, actual) {
    if (!actual) {
      throw Error(`"${identifier} must be set, not "${actual}"`)
    };
  } // throw_not_set

  throw_not_integer(identifier, actual) {
    if (!Number.isInteger(actual)) {
      throw Error(`"${identifier}" must be an integer, not ${actual}`);
    };
  }; // throw_not_integer

  throw_invalid_id(identifier, actual_id) {
    if (document.getElementById(actual_id) === null) {
      throw Error(`"${identifier}" isn't a valid ID - "${actual_id}"`);
    };
  }; // throw_invalid_id
  
  check_rep(){
    this.throw_non_number("min", this.min);
    this.throw_non_number("max", this.max);
    this.throw_non_number("default_value", this.default_value);
    this.throw_non_number("step_size", this.step_size);
    this.throw_not_set("label", this.label);
    this.throw_not_integer("precision", this.precision);
    this.throw_invalid_id("slider_div", this.slider_div);
    this.throw_invalid_id("caption_div", this.caption_div);
  }; // check_rep
}; // SliderSettings

export { SliderSettings }
