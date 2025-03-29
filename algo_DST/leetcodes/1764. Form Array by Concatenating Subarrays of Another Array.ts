/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}

loop through each num
    and check if it matches the current group
        if yes count++
            and jump ahead by + group.length;

return count === groups.length;
time: O(nums.length * longest group)
space: O(1);
 */
var canChoose = function(groups, nums) {
    let count = 0;
    let gi = 0;
    let ni = 0;
    while (gi < groups.length && ni < nums.length) {
        const curGroup = groups[gi] || [];
        let match = true;
        let i = 0;
        while (match && i < curGroup.length) {
            match = nums[ni + i] === curGroup[i];
            i++
        }
        if (match) {
            count++;
            ni += curGroup.length;
            gi++;
        } else {
            ni++
        }

    }
    return count === groups.length;
};