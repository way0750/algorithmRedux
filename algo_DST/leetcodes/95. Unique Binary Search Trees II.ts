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
 if only one node then return return TreeNode(val);
 or null, then just return null
 recursively pass down the left portion and the right portion
 always return the root
so whatever gets returned, assign to left or right

if thinking in terms of backtracking:
decision making:
    loop from 1..n, each number is a decision
validating solution
    base case:
        input is max < 1 or min > n
        or max - min === 1
        return node with no children
        [root]
    what to always return:
        [root, root, root]
    what to do with returns:
        go through all the roots and add self to it either as left/right
    how to make problem smaller / progress:
        loop from min..max
 */

// this is bottom to top
// no shared container
// partial solution that are valid will bubble up
// upper stack just cut the problem smaller and throw them to lower stack
// then go through returns to build complete solutions
var generateTrees = function(n, min=1, max=n+1) {
    if (max-min === 1) return [new TreeNode(min)]
    if (max <= min) return [null];
    const ans = [];
    for (let i = min; i < max; i++) {
        const leftSubTrees = generateTrees(n, min, i);
        const rightSubTrees = generateTrees(n, i+1, max);
        for (let leftSubTree of leftSubTrees) {
            for (let rightSubTree of rightSubTrees) {
                ans.push(new TreeNode(i, leftSubTree, rightSubTree));
            }
        }
    }
    return ans;
};