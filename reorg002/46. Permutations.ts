/**
 * Given an array nums of distinct integers, return all the possible 
permutations
. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.

to create a new permutation
add one number to all exiting permutation
ex: 
[1,2], [2,1]
add 3 to each of them
[3,1,2], [3,2,1]
then for each of the permutation, swap number: new number (3 in this case) with the next number on right:
ex: [3,1,2]
[3,1,2]
[1,3,2]
[1,2,3]
time and space: O(2**number.length)
 */

function permute(nums: number[]): number[][] {
    let permutations = [[]];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const newPermus = []
        for (let j = 0; j < permutations.length; j++) {
            const permu = [num, ...permutations[j]];
            newPermus.push(permu.slice())
            for (let k = 0; k < permu.length-1; k++) {
                [permu[k], permu[k+1]] = [permu[k+1], permu[k]];
                newPermus.push(permu.slice());
            }
        }
        permutations = newPermus
    }
    return permutations;
};