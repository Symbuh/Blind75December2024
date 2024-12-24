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
    let small = Math.min(p.val, q.val)
    let large = Math.max(p.val, q.val)

    while (root !== null) {
        if (root.val > large)
            root = root.left
        else if (root.val < small)
            root = root.right
        else 
            return root; 
    }
};/**
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
   let small = Math.min(p.val, q.val)
   let large = Math.max(p.val, q.val)

   while (root !== null) {
       if (root.val > large)
           root = root.left
       else if (root.val < small)
           root = root.right
       else 
           return root; 
   }
};