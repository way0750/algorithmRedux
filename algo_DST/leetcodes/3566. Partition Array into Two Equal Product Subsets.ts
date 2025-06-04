/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 use back tracking to find a sub set with a prod of target?
 can also start with a grand prod / 2, see if it === target
    if not, early return false
 */
var checkEqualPartitions = function(nums, target) {
    let grandProd = 1;
    for (let num of nums) grandProd *= num;
    if (Math.sqrt(grandProd) !== target) return false;
    const bt = (index, prod) => {
        if (prod === target) return true;
        if (index === nums.length || prod > target) return false;
        return bt(index + 1, prod * nums[index]) || bt(index + 1, prod);
    }
    return bt(0, 1);
};
