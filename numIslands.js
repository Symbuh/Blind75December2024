/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    let markIsland = (x, y) => {
        if (grid[x][y] === 1) return

        grid[x][y] = 0

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
            
            if (val === 1) {
                markIsland(xIdx, yIdx)
                output++
            }
        }
    }

    return output
}; 