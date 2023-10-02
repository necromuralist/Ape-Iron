class Slidini {
  _slider = null;
  _caption = null;

  constructor(settings, p5) {
    this.settings = settings;
    this.p5 = p5;
  } // constructor

  get slider() {
    if (this._slider === null) {
      // create the slider
      this._slider = this.p5.createSlider(
        this.settings.min,
        this.settings.max,
        this.settings.default_value,
        this.settings.step_size,
      );
  
      // attach it to the div tag
      this._slider.parent(this.settings.slider_div);
  
      // set the callback to change label on update
      this._slider.input(() => this.update_caption());
  
      // add the label to the slider
      this.update_caption();
    }
    return this._slider;
  }

  get caption() {
    if (this._caption === null) {
      this._caption = this.p5.select(this.settings.caption_div);
    }
    return this._caption;
  }

  update_caption() {
    this.caption.html(
      `${this.settings.label}: ` +
        `${this.slider.value().toFixed(this.settings.precision)}`);
  } // update_caption

export { Slidini }
