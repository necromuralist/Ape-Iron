class ElementGetter {
  #element;
  
  constructor(element_id, document) {
    this.element_id = element_id;
    this.document = document;
  };

  get element() {
    if (!this.#element) {
      this.#element = this.document.getElementById(this.element_id);
      if (!this.#element) {
        throw Error(`Unable to pull the element with ID '${this.element_id}'`);
      };
    };
    return this.#element;
  };
  
}; // ElementGetter

export { ElementGetter }
