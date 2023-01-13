var longestCommonPrefix = function (strs) {
  var subStrings = []
  var nextSubStrings = []
  if (strs.length == 1) {
    return strs[0]
  }
  var temp = ''
  for (var i = 0; i < strs[0].length; i++) {
    temp += strs[0][i]
    subStrings.push(temp)
  }
  strs.splice(0, 1)
  strs.forEach((elem, index) => {
    if (subStrings.length == 0) {
      return ''
    }
    subStrings.forEach((subString) => {
      var isCommon = elem.indexOf(subString)
      if (isCommon === 0) {
        nextSubStrings.push(subString)
      }
    })
    subStrings = nextSubStrings
    nextSubStrings = []
  })
  if (subStrings.length !== 0) {
    console.log(subStrings)
    subStringsLength = subStrings.map(function (str) {
      return str.length
    })
    var min = Math.max.apply(Math, subStringsLength)
    return subStrings[subStringsLength.indexOf(min)]
  } else {
    return ''
  }
}
