/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let final = 0,
    current = 0,
    next = 1
  for (var i = 0; i < n; i++) {
    final = current + next
    current = next
    next = final
  }
  return final
}
