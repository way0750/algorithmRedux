/**
 * @param {string[]} nums
 * @return {string}

make a set with nums
then make binary string with '0' and '1'

base case:
    when pattern.length === nums.length;
        return true/false, if the pattern is found in the set

 */
        var findDifferentBinaryString = function(nums) {
            const n = nums.length;
            let curNum = 0;
            let curBNum = curNum.toString(2).padStart(n, '0');
            const added = new Set(nums);
            const len = parseInt('1'.repeat(n), 2);
            for (let i = 0; i <= len; i++) {
                const str = (i).toString(2).padStart(n, '0');
                if (!added.has(str)) return str;
            }
        };