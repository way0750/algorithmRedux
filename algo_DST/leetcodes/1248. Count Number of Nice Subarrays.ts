/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 do a sliding window that is as wide as possible
 keep tracking of all the odds numbers' indexes
    put them in an array
 back..array[0] * array[len-1]..front
 */
 var numberOfSubarrays = function(nums, k) {
    const odds = [];
    for (let i = 0; i < nums.length; i++) if (nums[i] % 2 === 1) odds.push(i);
    
    if (odds.length < k) return 0
    odds.unshift(-1)
    odds.push(nums.length);

    let back = 1;
    let count = 0;
    for (let front = k; front < odds.length-1; front++) {
        const backLen = odds[back] - odds[back-1];
        const frontLen = odds[front+1] - odds[front];
        count += backLen * frontLen;
        back++;
    }
    return count;
};
