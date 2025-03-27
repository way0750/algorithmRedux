/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 list post order vals
always go all children
post order, left to right
    all children first


base case:
    node has no children
        push current node into the ans arr
what to always return:
    an array containing all the vals
what to do with returns:
    put current node (parent) into the array
    then return the array
how to make the problem smaller / make progress
    go through children one by one left to right

time and space: O(n)
 */
var postorder = function(root, ans = []) {
    if (!root) return ans;

    for (let child of root.children) postorder(child, ans);

    ans.push(root.val);

    return ans;
};