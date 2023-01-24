/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function longestDepth(rootNode) {
  if (!rootNode) return 0
  var leftDepth = 1
  var rightDepth = 1
  leftDepth += longestDepth(rootNode.left)
  rightDepth += longestDepth(rootNode.right)
  return leftDepth > rightDepth ? leftDepth : rightDepth
}
var maxDepth = function (root) {
  return longestDepth(root)
}
