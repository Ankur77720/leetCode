/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  m--
  n--
  var p = m + n + 1
  while (n >= 0) {
    if (m != -1 && nums1[m] > nums2[n]) {
      nums1[p] = nums1[m]
      m--
    } else {
      nums1[p] = nums2[n]
      n--
    }
    p--
  }
}
