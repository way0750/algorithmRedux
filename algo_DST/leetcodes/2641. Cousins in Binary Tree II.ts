/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 well,
 root, root.left and root.right will always be 0
 then from first level on (0 indexed levels)
    get the next level
    get the sum of the next level
    go through the next level again and replace val by sum - (sum of left and right)

time: O(amount of node);
space: O(2**depth);
 */
var replaceValueInTree = function(root) {
    root.val = 0;
    let stack = [];
    if (root.left) {
        root.left.val = 0;
        stack.push(root.left);
    }
    if (root.right) {
        root.right.val = 0;
        stack.push(root.right);
    }
    while (stack.length) {
        const nextLevel = [];
        let levelSum = 0;
        for (let node of stack) {
            levelSum += (node.left?.val || 0);
            levelSum += (node.right?.val || 0);
            node.left && nextLevel.push(node.left);
            node.right && nextLevel.push(node.right);
        }
        for (let node of stack) {
            let childSum = 0;
            childSum += (node.left?.val || 0);
            childSum += (node.right?.val || 0);
            if (node.left) node.left.val = levelSum - childSum;
            if (node.right) node.right.val = levelSum - childSum;
        }
        stack = nextLevel;
    }
    return root;
};