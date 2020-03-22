var first = (function() {
  var _min = function() {
    logger.log("Arguments of min function");
    logger.log(arguments);
    var m = arguments[0];

    for (var i = 1; i < arguments.length; i++) {
      if (arguments[i] < m) {
        m = arguments[i];
      }
    }

    return m;
  };

  function run() {
    logger.log("--------1--------");
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];
    var otherNumbers = [1000];
    logger.log(_min(1, 2, 3));
    // var minValue = min.call(null, numbers[0], numbers[1]/* , ..... */);
    // var minValue = min.apply(null, numbers);
    // logger.log(minValue);

    // otherNumbers.push.apply(otherNumbers, numbers);
    // otherNumbers.push(...numbers); // ES6
    // logger.log(otherNumbers);
  }

  return {
    run: run
  };
})();
