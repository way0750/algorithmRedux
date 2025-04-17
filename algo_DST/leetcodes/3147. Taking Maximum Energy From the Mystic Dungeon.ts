/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}

 max = 3;
 5,2,-10,-5,1
          0 3

max = -1
sums =       -3,-2
       -2,-3,-1,1,2,0,0,0,1

compar
is it out? yes: then compare to max
    no: then sum sum i+k number

loop through each number:
    if current num is < 0
        compare with max;
        don't add current number to sum
    if current num is >= 0
        then sum + self, and compare with



max -1
-2.-3.-1
go from back to front
    build cases
    current i + (result at i+k)
        compare and update
    save result at dp[i]
 */
    var maximumEnergy = function(energy, k) {
        const dp = Array(energy.length + k).fill(0);
        let max = -Infinity;
        for (let i = energy.length-1; i > -1; i--) {
            dp[i] += energy[i] + dp[i+k];
            max = Math.max(max, dp[i]);
        }
        return max;
    };