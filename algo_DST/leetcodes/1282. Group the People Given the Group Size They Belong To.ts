/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const groupBy = {};
    for (let i = 0; i < groupSizes.length; i++) {
        const g = +groupSizes[i];
        groupBy[g] = groupBy[g] || [[]];
        if (groupBy[g][0].length === g) {
            groupBy[g].unshift([]);
        }
        groupBy[g][0].push(i)
    }
    const ans = [];
    for (let g in groupBy) {
        ans.push(...groupBy[g]);
    }
    return ans;
};