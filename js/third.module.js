var third = (function() {
  var Laptop = function(brand, emptySpace) {
    this.brand = brand;
    this.emptySpace = emptySpace;
    this.occupiedSpace = 0;
    this.isTurnedOn = false;
    this.isOpened = false;
  };
  function run() {
    logger.log("--------3--------");

    // var laptop = new Laptop('Lenovo', 1024);

    var laptop = {};
    Laptop.call(laptop, "Lenovo", 1024);
    laptop.__proto__ = Laptop.prototype;
    logger.log(laptop);
  }
  return {
    run: run
  };
})();
