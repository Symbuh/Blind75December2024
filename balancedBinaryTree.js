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
var isBalanced = function(root) {
    let rightD, leftD
    
    let findDepth = (node, level, leftOrRight) => {
        console.log(`Level: ${level} leftOrRight ${leftOrRight}`)
        if (!node.left && !node.right) {
            if (!leftOrRight) {
                rightD = level
            } else {
                console.log('setting leftD' + level)
                leftD = level 
            }
            return level 
        }
        if (node.right) {
            findDepth(node.right, level + 1, leftOrRight)
        }
        if (node.left) {
            findDepth(node.left, level + 1, leftOrRight)
        }
    }
    
    if (root === null) {
        return true
    }
    if (root.left === null || root.right === null) {
        return true
    }

    let leftDepth = findDepth(root.left, 1, true)
    let rightDepth = findDepth(root.right, 1, false)

    console.log(`Right depth ${rightDepth}, Left depth ${leftDepth}`)
    console.log(`RightD: ${rightD}, leftD ${leftD}`)

    if (Math.abs(rightD - leftD) > 1) {
        return false
    } 

    return true
};