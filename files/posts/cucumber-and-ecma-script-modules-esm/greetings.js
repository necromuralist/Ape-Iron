class Greeter {
    sayHello() {
        return "hello";
    }
}

if (typeof module != "undefined" ) {
  module.exports = Greeter;
};
