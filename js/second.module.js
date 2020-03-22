var second = (function() {
  var Circle = function(r) {
    this.r = r;
  };
  Object.defineProperty(Circle.prototype, "area", {
    get: function() {
      return this.r * this.r * Math.PI;
    }
  });
  Object.defineProperty(Circle.prototype, "circumference", {
    get: function() {
      return 2 * this.r * Math.PI;
    }
  });
  function run() {
    logger.log("--------2--------");
    var circle = new Circle(10);
    logger.log(circle);
    logger.log("area of the circle: " + circle.area);
  }
  return {
    run: run
  };
})();
