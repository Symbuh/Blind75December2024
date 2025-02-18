var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0, end = n
        
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)

            if (isBadVersion(mid)) {
                if (!isBadVersion(mid - 1)) {
                    return mid 
                }

                end = mid - 1
            } else {
                if (isBadVersion(mid + 1)) {
                    return mid + 1
                }

                start = mid + 1
            }
        }

    };
};
// 44ms, beats 89% of submissions. 