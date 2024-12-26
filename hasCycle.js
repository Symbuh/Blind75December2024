/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 // 55ms, faster than 93.11% of javascript solutions
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head

    while(fast && fast.next) {
        head = head.next
        fast = fast.next.next
        if (head === fast) return true
    }
    return false
};