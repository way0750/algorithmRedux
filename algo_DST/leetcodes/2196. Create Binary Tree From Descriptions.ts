/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const parents = new Set();
    const children = new Set();
    const nodes = {};
    for (let [parent, child, isLeft] of descriptions) {
        nodes[parent] = nodes[parent] || new TreeNode(parent);
        nodes[child] = nodes[child] || new TreeNode(child);
        if (isLeft) {
            nodes[parent].left = nodes[child];
        } else {
            nodes[parent].right = nodes[child];
        }
        if (!children.has(parent)) parents.add(parent);
        parents.delete(child);
        children.add(child);
    }
    const rootId = [...parents][0];
    return nodes[rootId];
};