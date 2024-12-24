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
    
    let height = (node) => {
        if (node === null) return 0

        // Recursively get the height of the left subtree
        let leftHeight = height(node.left)
        if (leftHeight === -1) return -1 // If the left subtree is unblanced, return -1

        let rightHeight = height(node.right)
        if (rightHeight === -1) return -1

        if (Math.abs(leftHeight - rightHeight) > 1) return -1

        return Math.max(leftHeight, rightHeight) + 1
    }

    return height(root) !== -1
};
// 1ms, beats 88.58% of submissions
/*
    So basically this is the most insane soultion ever and nobody could ever hope to understand it and I think that's something that's pretty fucked 
    of them to just toss in there this is a painfully rude solution. 

    But its basically the exact same logic that I used for mine without some of the issues. Each time he goes down a level he returns one higher, it's 
    just a very strange and confusing way of doing so. I hate recursion and I think I need a more detailed explanation
*/