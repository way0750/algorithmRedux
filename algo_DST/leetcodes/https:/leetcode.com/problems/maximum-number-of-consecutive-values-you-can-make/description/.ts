/**
 * @param {number[]} coins
 * @return {number}

 1 2 3 4

 1 1 3 4 10
 use back tracking to find all numbers
 then go from 0 til the largest one
 return the largest one + 1
 */
 var getMaximumConsecutive = function(coins) {
    let nextVal = 1;
    coins.sort((a, b) => a - b);
    for (let num of coins) {
        if (num > nextVal) return nextVal;
        nextVal += num;
    }

    return nextVal;
};