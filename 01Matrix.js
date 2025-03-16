/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let output = [], visited = []

    mat.forEach((row, i) => {
        let tuple = []
        row.forEach((cell, j) => {
            tuple.push(0)
        })
        visited.push(tuple)
    })

    let findDistance = (row, cell, depth, visited) => {
        if (mat[row]?.[cell] !== undefined) {
            if (mat[row][cell] === 0) {
                return depth
            }
            visited[row][cell] = 1
            depth++
            let temp
            if (visited[row + 1]?.[cell] === 0) {
                temp = findDistance(row + 1, cell, depth, visited)
            }
            if (visited[row - 1]?.[cell] === 0) {
                temp = Math.min(findDistance(row - 1, cell, depth, visited), depth)
            }
            if (visited[row]?.[cell + 1] === 0) {
                temp = Math.min(findDistance(row, cell + 1, depth, visited), depth)
            }
            if (visited[row]?.[cell - 1] === 0) {
                temp = Math.min(findDistance(row, cell - 1, depth, visited), depth)
            }

            return temp
        }
    }

    mat.forEach((row, rowIdx) => {
        let tuple = []
        row.forEach((cell, cellIdx) => {
            tuple.push(findDistance(rowIdx, cellIdx, 0, visited))
        })
        output.push(tuple)
        console.log(output)
    })


    return output
};