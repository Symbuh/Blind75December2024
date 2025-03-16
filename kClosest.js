/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    points = points.sort((a, b) => {
        return Math.sqrt(a[0] * a[0] + a[1] * a[1]) - Math.sqrt(b[0]*b[0] + b[1]*b[1])
    })
    
    let output = []

    for (let i = 0; i < k; i++) {
        output.push(points[i])
    }

    return output
};