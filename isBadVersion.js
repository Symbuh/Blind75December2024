/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let searching = true, currentMin = 0, currentMax = n, middle = Math.floor(n/2)

        if (n === 1 && isBadVersion(1) === true) {
            return 1
        }

        while (searching) { 
            if (isBadVersion(middle)) {
                if (!isBadVersion(middle - 1)) {
                    return middle 
                } else {
                    currentMax = middle 
                    middle = Math.floor((currentMax - currentMin) / 2) + currentMin
                }
            } else {
                currentMin = middle
                middle = Math.ceil((currentMax - currentMin) / 2) + currentMin
            }
            if (currentMax === currentMin) {
                searching = false
            }
        }
    };
};