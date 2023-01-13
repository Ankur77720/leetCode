/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const hasTable = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900,
      }
  s = s.split('')
  var totalCount = 0
  for (var i = 0; i < s.length; i++) {
    var temp = s[i]
    var iCheck = (s[i] === 'I')
    var xCheck = (s[i] === 'X')
    var cCheck = (s[i] === 'C')
    if ((iCheck || xCheck || cCheck) && i < s.length - 1) {
      if (iCheck) {
        if (s[i + 1] === 'V') {
          temp += 'V'
          i++
        } else {
          if (s[i + 1] === 'X') {
            temp += 'X'
            i++
          }
        }
      }
      if (xCheck) {
        if (s[i + 1] === 'L') {
          temp += 'L'
          i++
        } else {
          if (s[i + 1] === 'C') {
            temp += 'C'
            i++
          }
        }
      }
      if (cCheck) {
        if (s[i + 1] === 'D') {
          temp += 'D'
          i++
        } else {
          if (s[i + 1] === 'M') {
            temp += 'M'
            i++
          }
        }
      }
    }
    totalCount += hasTable[temp]
  }
  return totalCount
}
