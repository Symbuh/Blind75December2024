/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
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