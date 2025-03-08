/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 use a stack
 keep on pushing nums into it if val is lesser than the last item in stack
    assign the item as the left child of the last item in the stack
if running into an item that's larger than the last item in stack
    pop the last item if it is less than current num
        and check if current num is also larger than the new last item in the stack
            if not, then the most recent popped node is the parent, assign the current num's node to right
                and push this new node into the stack
time: O(n)
space: O(n)
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    const root = new TreeNode(preorder.shift());
    const stack = [root];
    for (let val of preorder) {
        const curNode = new TreeNode(val);
        if (val < stack[stack.length-1].val) {
            const parent = stack[stack.length-1];
            parent.left = curNode;
        } else {
            let lastStackNode = stack.pop();
            while (stack.length && stack[stack.length-1].val < val) {
                lastStackNode = stack.pop();
            }
            lastStackNode.right = curNode;
        }
        stack.push(curNode);
    }

    return root;
};