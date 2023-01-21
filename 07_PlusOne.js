/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var size = digits.length
  for (var i = size - 1; i >= 0; i--) {
    digits[i] = digits[i] + 1
    if (digits[i] >= 10) {
      if (i == 0) {
        digits[i] = 0
        digits.splice(0, 0, 1)
      } else {
        digits[i] = 0
      }
    } else {
      break
    }
  }
  return digits
}
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
