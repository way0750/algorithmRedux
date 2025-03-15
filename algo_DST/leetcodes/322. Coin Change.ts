/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 can do both backtracking and dp

 dp:
 sub problems are smaller amount of money
    if bototm up: 0..amount
    building up the smallest change count at each amount
        then amount - coinSize = lookback value, which you can use to find previous amount
smallest = [
    0: 0,
    1, // if impossible set Infinity
    2: Infinity,
    3: 1
]
can't find anything? -1
 */
var coinChange = function(coins, amount) {
    //inclusive of amount
    // using Infinity so that anyother value can compare to it and set new value
    const prevAmounts = Array(amount+1).fill(Infinity)
    // if amount is 0, then coin change count should be 0 too
    prevAmounts[0] = 0;

    for (let curAmount = 1; curAmount <= amount; curAmount++) {
        // go through each coins and get new sub ammount to be used as previous amount
        // and find the smallest one
        for (let coin of coins) {
            const preAmount = curAmount - coin;
            if (preAmount > -1) {
                prevAmounts[curAmount] = Math.min(prevAmounts[preAmount]+1, prevAmounts[curAmount]);
            }
        }
    }
    return prevAmounts[amount] === Infinity ? -1 : prevAmounts[amount];
};