/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let memo = {}
    
    let dfs = (remainder) => {
        if (remainder === 0) return 0
        if (remainder < 0) return Infinity
        if (remainder in memo) return memo[remainder]

        let min = Infinity
        for (let coin of coins) {
            let res = dfs(remainder - coin)
            if (res !== Infinity) {
                min = Math.min(min, res + 1)
            }
        }

        memo[remainder] = min
        return min
    }

    let result = dfs(amount) 
    return result === Infinity ? -1 : result
};