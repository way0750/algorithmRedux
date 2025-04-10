/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.groups = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        this.groups[num] = this.groups[num] || [];
        this.groups[num].push(i);
    } 
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const indexes = this.groups[target];
    return indexes[Math.floor(indexes.length * Math.random())];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */