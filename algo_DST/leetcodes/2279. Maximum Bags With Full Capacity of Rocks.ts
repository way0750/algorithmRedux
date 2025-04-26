/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 2345
 1244
 1101
 0111
 get the diff between cap and rocks
 sort the diff
 do a running sum
 find where the running sum is larger than additionalrocks
 that index;
 time: O(n + nlogn)
 space: O(n)
 */
 var maximumBags = function(capacity, rocks, additionalRocks) {
    const diff = [];
    let need = 0;
    for (let i = 0; i < rocks.length; i++) {
        const d = capacity[i] - rocks[i];
        diff.push(d);
        need += d;
    }
    if (need < additionalRocks) return rocks.length;
    diff.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < diff.length; i++) {
        sum += diff[i];
        if (sum > additionalRocks) return i;
    }
    return rocks.length;
};