/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    const dist = new Set(nums);
    for (let num of nums) {
        const reversed = [...`${num}`].reverse().join('')
        dist.add(+reversed);
    }
    return dist.size;
};