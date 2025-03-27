/**
 * @param {string} boxes
 * @return {number[]}
 for each index, how many moves does it take to move all the balls from the rest of the indexes
    to this index.
 the distance is the amount of move for a specific index
 0 0 1 0 1 1

 0 0 0 1 1 2 amount of nodes from the left
 3 3 2 2 1 0 amount of nodes from the right

prefix sums:
from left
 0 0 0 1 2 4 check the amount of nodes on the left, and + that amount, for moving all of those
    nodes to current position
from right
11 8 5 3 1 0

11 8 5 4 3 4, good


 11
   8 basically the total moves on the right side - amount of nodes
   so use two prefix sums, from left and from right
 */
   var minOperations = function(boxes) {
    const temp = Array(boxes.length).fill(0)
    // 0 0 0 1 1 2 amount of nodes from the left
    // copy over i-1, then check boxes[i-1]
    let nodeCountLeft = temp.slice();
    for (let i = 0; i < boxes.length; i++) {
        nodeCountLeft[i] += (nodeCountLeft[i-1] || 0);
        boxes[i-1] > 0 && nodeCountLeft[i]++;
    }

    //  3 3 2 2 1 0 amount of nodes from the right
    let nodeCountRight = temp.slice();
    for (let i = boxes.length-1; i > -1; i--) {
        nodeCountRight[i] += (nodeCountRight[i+1] || 0);
        boxes[i+1] > 0 && nodeCountRight[i]++;
    }

    // make prefix sums: just roll things up at each index
    const prefixLeft = nodeCountLeft.slice();
    for (let i = 0; i < boxes.length; i++) {
        prefixLeft[i] += prefixLeft[i-1] || 0;
    }
    const prefixRight = nodeCountRight.slice();
    for (let i = boxes.length-1; i > -1; i--) {
        prefixRight[i] += prefixRight[i+1] || 0;
    }
    const ans = temp.slice();
    for (let i = 0; i < boxes.length; i++) ans[i] += prefixLeft[i] + prefixRight[i];
    return ans;
};