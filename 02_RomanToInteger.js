/**
 * @param {string} s
 * @return {number}
 */
function charToInt(s) {
  var temp = 0
  switch (s) {
    case 'M':
      temp = 1000
      break
    case 'D':
      temp = 500
      break
    case 'C':
      temp = 100
      break
    case 'L':
      temp = 50
      break
    case 'X':
      temp = 10
      break
    case 'V':
      temp = 5
      break
    case 'I':
      temp = 1
      break
    case 'IV':
      temp = 4
      break
    case 'IX':
      temp = 9
      break
    case 'XL':
      temp = 40
      break
    case 'XC':
      temp = 90
      break
    case 'CD':
      temp = 400
      break
    case 'CM':
      temp = 900
      break
  }
  return temp
}
var romanToInt = function (s) {
  var arr = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']
  var temp = s
  var finalNumber = 0
  s = s.split('')
  arr.forEach((elem) => {
    var isIt = temp.indexOf(elem)
    if (isIt != -1) {
      finalNumber += charToInt(elem)
      s.splice(isIt, 2)
    }
  })
  s.forEach((elem) => {
    finalNumber += charToInt(elem)
  })
  return finalNumber
}
