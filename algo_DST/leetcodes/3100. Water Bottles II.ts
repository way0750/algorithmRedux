/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}


 10 0 3 0
  7 3 3 3
  8 0 4 3
  4 4 4 7
  5 0 5 7
  0 5 5 12
  1 0 6 12
  0 0 6 13

  13,14,15
  6,7,8
  6,13,21 > 15
 */
  var maxBottlesDrunk = function(numBottles, numExchange) {
    let totalExchange = numExchange;
    let round = 0;
    while ((numBottles + round) >= totalExchange) {
        round++;
        totalExchange += ++numExchange;
    }
    return numBottles + round;
};