/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    /*
        I'm thinking we memoize this using an array.

        1. Iterate through the string,
        - if we find an open bracket push it into the array
        - if we find a closed bracket pop
    */
    let brackets = { 
        "{": "}",
        "[": "]",
        "(": ")",
    }
    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (brackets[s[i]]) {
            stack.push(brackets[s[i]])
        } else {
            let pop = stack.pop()
            if (s[i] !== pop) {
                return false
            }
        }
    }
    return stack.length === 0 ? true : false; 
};