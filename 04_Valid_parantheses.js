var isValid = function (s) {
  if (s.length % 2 !== 0 || s.length == 0) {
    return false
  }
  var final = true
  var str = []
  var closer = [')', '}', ']']
  s.split('').forEach((element) => {
    if (['(', '{', '['].includes(element)) str.push(element)
    else {
      var popedElement = str.pop()
      var index = ['(', '{', '['].indexOf(popedElement)
      if (closer[index] !== element) {
        final = false
      }
    }
  })
  if (str.length !== 0) {
    return false
  }
  return final
}

console.log(isValid('(('))
