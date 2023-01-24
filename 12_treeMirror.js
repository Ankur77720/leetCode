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
 * @return {boolean}
 */
var rightSideArray = []
var leftSideArray = []
function leftSideTraverse(leftSideNode) {
  if (!leftSideNode) {
    leftSideArray.push(leftSideNode)
    return
  }
  leftSideArray.push(leftSideNode.val)
  leftSideTraverse(leftSideNode.left)
  leftSideTraverse(leftSideNode.right)
}
function rightSideTraverse(rightSideNode) {
  if (!rightSideNode) {
    rightSideArray.push(rightSideNode)
    return
  }
  rightSideArray.push(rightSideNode.val)
  rightSideTraverse(rightSideNode.right)
  rightSideTraverse(rightSideNode.left)
}
var isSymmetric = function (root) {
  leftSideArray=[]
  rightSideArray=[]
  if (!root.left && !root.right) return true
  leftSideTraverse(root.left)
  rightSideTraverse(root.right)
  console.log(leftSideArray)
  console.log(rightSideArray)
  if (leftSideArray.length != rightSideArray.length) {
    return false
  }
  for (let i = 0; i < leftSideArray.length; i++) {
    if (leftSideArray[i] != rightSideArray[i]) return false
  }
  return true
}
