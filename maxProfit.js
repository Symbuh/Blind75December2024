/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = 100000, max = 0, output = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }

        if (prices[i] - min > output) {
            output = prices[i] - min
        }
    }

    return output
};