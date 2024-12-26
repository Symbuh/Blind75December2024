/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let memo = {}

    while (head !== null && head.next !== null) {
        if (memo[head] === head.next) {
            return true
        } else {
            if (!memo[head]) {
                memo[head] = head.next
            }
        }
        head = head.next
    }
    return false
};