const getNextNode = (node) => {
    // if there is node.right, get the furthest left on that sub tree
    if (node.right) {
        let curNode = node.right;
        while (curNode.left) {
            curNode = curNode.left;
        }
        return curNode;
    }

    // if there isn't node.right, then go up the parent chain
    // and find the first parent where parent.left is curNode

    let curNode = node;
    let parent = curNode.parent;
    while (parent && parent.right === curNode) {
        curNode = parent;
        parent = parent.parent;
    }

    return parent;
}

const findCommonAncestor = (tree, node1, node2) => {
    if (!tree) return tree;
    if (tree === node1 || tree === node2) return tree;
    const left = findCommonAncestor(tree.left, node1, node2);
    const right = findCommonAncestor(tree.right, node1, node2);
    if (left && right) return tree;
    return left || right;
}


const findMax = (arr: Array<number>): number => {
    // const m = Math.max(...arr);
    let curMax = arr[0]
    for (let i = 1; i < arr.length; i++) {
        curMax = Math.max(curMax, arr[i]);
    }
    return curMax;
}