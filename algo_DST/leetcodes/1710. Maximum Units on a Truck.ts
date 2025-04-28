/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 [[5,10],[2,5],[4,7],[3,9]]
 [[5,10],[3,9],[4,7],[2,5]]
 50 + 27 + 14
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let sum = 0;
    let i = 0;
    while (i < boxTypes.length && truckSize > 0) {
        const boxAmount = Math.min(boxTypes[i][0], truckSize);
        sum += boxAmount * boxTypes[i][1];
        truckSize -= boxTypes[i][0]
        i++;
    }
    return sum;
};