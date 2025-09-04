/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) {
        return null
    }

    if (root === p || root === q) {
        return root
    }
    
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)

    // We know our current node is LCA if one ancestor exists in the right subtree and another in the left subtree
    if (left && right) {
        return root
    }

    // We bubble up the non null value
    // This is either a P, Q, or the LCA if another non-null value is not found
    return left ? left : right
};