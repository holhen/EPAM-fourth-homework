var fourth = (function() {
  var Laptop = function(brand, emptySpace) {
    this.brand = brand;
    this.emptySpace = emptySpace;
    this.occupiedSpace = 0;
  };
  Laptop.prototype.isTurnedOn = false;
  Laptop.prototype.isOpened = false;

  Laptop.prototype.turnOn = function() {
    this.isTurnedOn = true;
    this.isOpened = true;
  };

  function run() {
    logger.log("--------4--------");

    var laptop1 = new Laptop("Lenovo", 1024);
    var laptop2 = new Laptop("Asus", 512);

    laptop1.turnOn();

    logger.log(laptop1.__proto__ === laptop2.__proto__);
    logger.log(laptop1.isTurnedOn === laptop2.isTurnedOn);
    logger.log(laptop1);
    logger.log(laptop2);

    logger.log(laptop1.hasOwnProperty("isTurnedOn"));

    // for (var key in laptop1) {
    //     logger.log(laptop1.hasOwnProperty(key));
    //     logger.log(laptop2.hasOwnProperty(key));
    // }
  }

  return {
    run: run
  };
})();
