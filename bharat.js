var num1 = 63
var num2 = 111
var num1Factors = []
var commonFactors = []
var primeNumbers = []
for (let i = 2; i <= (num1 < num2 ? num1 : num2); i++) {
  let flag = 0
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1
      break
    }
  }
  if (i > 1 && flag == 0) {
    primeNumbers.push(i)
  }
}
var pt = 0
while (num1 > 1) {
  if (num1 % primeNumbers[pt] == 0) {
    num1Factors.push(primeNumbers[pt])
    num1 = num1 / primeNumbers[pt]
    pt = 0
  } else {
    pt++
  }
}
pt = 1
while (num2 > 1) {
  if (num2 % primeNumbers[pt] == 0) {
    if (num1Factors.indexOf(primeNumbers[pt]) != -1) {
      commonFactors.push(primeNumbers[pt])
    }
    num1Factors.push(primeNumbers[pt])
    num2 = num2 / primeNumbers[pt]
    pt = 0
  } else {
    pt++
  }
}

var hcf = 1
commonFactors.forEach((elem) => {
  hcf *= elem
})
console.log(hcf)
