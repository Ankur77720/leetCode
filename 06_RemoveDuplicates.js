/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var total = 1
  var size = nums.length
  var current = nums[0]
  for (var i = 1; i < size; i++) {
    if (current == nums[i]) {
      nums.splice(i, 1)
      nums.push(current)
      size--
      i--
    } else {
      total++
      current = nums[i]
    }
  }
  return total
}
