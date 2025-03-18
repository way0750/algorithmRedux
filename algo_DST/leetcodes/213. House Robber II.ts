/**
 * @param {number[]} nums
 * @return {number}
 [100, 1, 1, 1, 100]
do two rounds?
first excluding first?
second include the first?
then compare and get the largest?
1,2,3,1
0,2,3,3
exclusive
loop from 1..length
dp from 1..length

1,2,3,1
1,2,4,0
inclusive:
loop from 0..length-1
dp from 0..length-1
 */
var rob = function(nums) {
    if (nums.length < 3) return Math.max(...nums);

    // inclusive:
    const inDP = Array(nums.length);
    inDP[0] = nums[0];
    inDP[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length-1; i++) {
        inDP[i] = Math.max(nums[i] + inDP[i-2], inDP[i-1]);
    }
    inDP[nums.length-1] = inDP[nums.length-2];

    // exclusive:
    const exDP = Array(nums.length);
    exDP[0] = 0;
    exDP[1] = nums[1];
    for (let i = 2; i < nums.length; i++) {
        exDP[i] = Math.max(nums[i] + exDP[i-2], exDP[i-1]);
    }

    return Math.max(inDP[nums.length-1], exDP[nums.length-1]);
};