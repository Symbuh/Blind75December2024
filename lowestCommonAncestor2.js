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

    // The first instance we find both left and right as an ancestor we have found LCA
    if (left && right) {
        return root
    }

    /*
        Below is our bubble up case, if we only have left or right as the common ancestor we return the P or Q that we've found 
        this will cause us to jump up to a higher ancestor. 
    */
    return left ? left : right
};