/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let memo = {}
    
    let dfs = (remainder) => {
        // Base cases for if we've reached the lowest depth or if a value already exists in our memo
        if (remainder === 0) return 0
        if (remainder < 0) return Infinity
        if (remainder in memo) return memo[remainder]

        // The loop below attempts to subtract each coin, and then store the coin that yields the lowest number of combinations. 
        let min = Infinity
        for (let coin of coins) {
            // Attempt DFS with each coin at this level
            let res = dfs(remainder - coin)
            if (res !== Infinity) {
                // If we get a valid response, check to see if it's the lowest coin combination, if it is store it as min. 
                min = Math.min(min, res + 1)
            }
        }
        // Store the minimum we found at this depth in memo so we don't have to calculate again. 
        memo[remainder] = min
        return min
    }

    let result = dfs(amount) 
    return result === Infinity ? -1 : result
};