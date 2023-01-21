/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    var epsilon = 0.000001;
    var t = x;
    while (Math.abs(t - x/t) > epsilon * t) {
      t = (x/t + t) / 2.0;
    }
    return t;
  }