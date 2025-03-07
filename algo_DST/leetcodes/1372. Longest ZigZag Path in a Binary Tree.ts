const longestZigZag = function(root, left = 0, right = 0) {
    if (!root) return Math.max(left, right) - 1;
    return Math.max(
        Math.max(left, right),
        longestZigZag(root.left, 0, left+1),
        longestZigZag(root.right, right+1, 0)
    );
};