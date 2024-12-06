/*
    How the recursive solution works
    1. As long as both lists aren't null 
        - Find the lesser of our two current values 
        - Invoke a recursive function call on the next of that value and return. 

    2. When we get to the bottom of the call stack and one of the lists is null 
        - We return the rest of the remaining characters which should now appear in order 
*/

var mergeTwoLists = function(list1, list2) {
    if (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            list1.next = mergeTwoLists(list1.next, list2)
            return list1
        } else {
            list2.next = mergeTwoLists(list1, list2.next)
            return list2
        }
    }
    if (list1 === null) {
        return list2
    }
    return list1
};