/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    coins.sort((a, b) => a - b)
    let count = 0

    for (let i = coins.length - 1; i >= 0; i--) {
        if (amount >= coins[i]) {
            let temp = Math.floor(amount / coins[i])
            console.log(`Round amount ${amount} coin ${coins[i]} result: ${temp}`)
            count = count + temp
            amount = amount - (coins[i] * temp)
        }
    }

    console.log(`after loop: Count ${count} Amount ${amount}`)
    if (amount !== 0) {
        return -1
    }

    return count
};