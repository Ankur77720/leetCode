var twoSum = function (nums, target) {
  for (var index = 0; index < nums.length; index++) {
    let nexIndex = nums.indexOf(target - nums[index])
    if (nexIndex != -1 && nexIndex != index) {
      return [index, nexIndex]
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9))
