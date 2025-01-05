/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let memo = {}

    for (let i = 0; i < magazine.length; i++) {
        if (memo[magazine[i]]) {
            memo[magazine[i]]++
        } else {
            memo[magazine[i]] = 1
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (!memo[ransomNote[i]] || memo[ransomNote[i] <= 0]) {
            return false
        } else {
            memo[ransomNote[i]]--
        }
    }
    return true
};