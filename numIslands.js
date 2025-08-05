/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // Storing the visited Array is unneccessary
    // We can use the original array and re-assign values to zero... 
    // this is going to save significant runtime and I cant believe that I 
    // didn't remember this solution from previous attempts at the problem
    // I'm frusterated with myself and I'm spamming a bunch of typing for 
    // extra commit swag
    let visited = []
    
    for (let row of grid) {
        let visRow = Array(row.length).fill(0)
        visited.push(visRow)
    }

    let markIsland = (x, y) => {
        if (visited[x][y] === 1) return

        visited[x][y] = 1

        if (grid[x + 1]?.[y] && parseInt(grid[x + 1][y]) === 1) {
            markIsland(x + 1, y)
        }

        if (grid[x - 1]?.[y] && parseInt(grid[x - 1][y]) === 1) {
            markIsland(x - 1, y)
        }

        if (grid[x]?.[y + 1] && parseInt(grid[x][y + 1]) === 1) {
            markIsland(x, y + 1)
        }

        if (grid[x]?.[y - 1] && parseInt(grid[x][y - 1]) === 1) {
            markIsland(x, y - 1)
        }

        return
    }

    let output = 0
    
    for (let [xIdx, row] of grid.entries()) {
        for (let [yIdx, val] of row.entries()) {
            val = parseInt(val)
            
            if (val === 1 && visited[xIdx][yIdx] === 0) {
                markIsland(xIdx, yIdx)
                output++
            }
        }
    }

    return output
}; 