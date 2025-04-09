/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 always be creating a range
    keep adding the balloons's time
    keep finding the max balloon time
 if range size > 1
    sum - max, that's how long it will take to remove all but the longest one
    add the result to global count
 
 */
    var minCost = function(colors, neededTime) {
        let count = 0;
        let rangeMax = 0;
        let rangeSum = 0;
        for (let i = 0; i <= colors.length; i++) {
            if (colors[i-1] === colors[i]) {
                rangeMax = Math.max(rangeMax, neededTime[i]);
                rangeSum += neededTime[i];
            } else {
                count += rangeSum - rangeMax;
                rangeMax = neededTime[i];
                rangeSum = neededTime[i];
            }
        }
        return count;
    };