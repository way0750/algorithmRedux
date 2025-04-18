/**
 * @param {number[]} nums
 * @return {number}
 the selected group student count > each selected member's value
    and < than each not-selected member

how many ways can you form valid group


0 2 3 3 6 6 7 7
0 2 2 2 6 6 7 7
      |

0 1 1 1 6 6 7 7
y n n y

sort it in ascending order
then compare index+1 > val
    if yes increase count
    there might be dubplicated, in that case
        use a set, if index+1 > val, then add the val to set 

0 1 1 1
y n n n       
 */
var countWays = function(nums) {
    nums.sort((a, b) => a - b);
    nums.unshift(-Infinity);
    nums.push(Infinity);
    let count = 0;
    for (let i = 0; i < nums.length-1; i++) {
        if (i > nums[i] && i < nums[i+1]) {
            count++;
        }
    }

    return count;
};
