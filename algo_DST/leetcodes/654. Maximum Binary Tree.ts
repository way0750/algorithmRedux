/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}

 go from left to right
 if cur num is smaller than last num in stack
    set last num.right = curNum
 if cur num is larger than last num
    pop it and set it as cur num.left
 */
    var constructMaximumBinaryTree = function(nums) {
        const stack = [];
        for (let num of nums) {
            const node = new TreeNode(num);
            while (stack.length && stack[stack.length - 1].val < num) {
                node.left = stack.pop();
            }
    
            while (!stack.length || stack[stack.length - 1].val > num) {
                if (stack.length) stack[stack.length -1].right = node;
                stack.push(node);
            }
        }
        return stack[0];
    };