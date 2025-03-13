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
var maxDepth = function(root) {
    if (!root) {
        return 0
    }

    let maxDepth = 0
    
    let inner = (node, currDepth) => {
        if (node?.left) {
            inner(node.left, currDepth + 1)
        }
        if (node?.right) {
            inner(node.right, currDepth + 1)
        }

        if (!node?.right && !node?.left) {
            if(currDepth > maxDepth) {
                maxDepth = currDepth
            }
            return
        }
    }

    inner(root, 1) 
    return maxDepth
};// 0ms runtime, faster than 100% of solutions 