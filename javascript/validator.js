/** The Validator class checks if a value is a certain type
    It throws an error if any value is the wrong type

    Args:
     - document {Object} : something to grab DOM elements
   **/
class Validator {
  emptiness = [null, undefined, NaN];

  constructor(document) {
    this.document = document;
  }

  is_a_number(identifier, actual) {
    if ((!actual && actual !== 0) || isNaN(actual)) {
      throw Error(`"${identifier}" must be a number not "${actual}"`);
    };
  }; // is_a_number

  is_set(identifier, actual) {
    if (this.emptiness.includes(actual)) {
      throw Error(`"${identifier} must be set, not "${actual}"`)
    };
  }; //is_set

  is_an_integer(identifier, actual) {
    if (!Number.isInteger(actual)) {
      throw Error(`"${identifier}" must be an integer, not ${actual}`);
    };
  }; // is_an_integer

  is_an_element_id(identifier, actual) {
    if (this.document.getElementById(actual) === null) {
      throw Error(`"${identifier}" isn't a valid ID - "${actual_id}"`);
    };
  }; // is_an_id

  
 }; // Validator

export { Validator }
