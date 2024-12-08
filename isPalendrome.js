var isPalindrome = function(s) {
    // First we need to escape all of the characters
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

    console.log(s)
    for (let i = 0; i < s.length/2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false
        }
    } 
    return true
};