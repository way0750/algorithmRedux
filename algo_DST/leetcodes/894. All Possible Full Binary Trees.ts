/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 1 3 5 7 9 11 13
 only odd numbers on each side
 then recursively build trees
 n = 7
 root has 1
    n = 6
    then loop through:
    left right:
    1 5
    3 3
    5 1

base case:
    if n === 1, [TreeNode(0, null, null)];
what to always return:
    an array of [root nodes]
what to do with returns:
    assign each roots to left/right depends on which side they are from
how to make progress:
    keep on passing a number to recursive call
    3
    1 2

 */
var allPossibleFBT = function(n, cache={ 1: [new TreeNode(0)] }) {
    if (n % 2 === 0) return [];
    if (cache[n]) return cache[n];
    const ans = [];
    for (let left = 1; left <= n-2; left += 2) {
        const leftTrees = allPossibleFBT(left, cache);
        const rightTrees = allPossibleFBT(n - left - 1, cache);
        for (let leftTree of leftTrees) {
            for (let rightTree of rightTrees) {
                const root = new TreeNode(0, leftTree, rightTree);
                ans.push(root);
            }
        }
    }
    cache[n] = ans;
    return ans;
};
