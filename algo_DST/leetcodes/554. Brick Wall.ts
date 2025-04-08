/**
 * @param {number[][]} wall
 * @return {number}
 [1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]
 
 0..1, 1..3, 3..5, 5..6
 0..3, 3..4, 4..6
 0..1, 1..4, 4..6
 0..2, 2..6
 0..3, 3..4, 4..6
 0..1, 1..4, 4..5, 5..6

 0: 6
 1: 3
 2: 1
 3: 3
 4: 4
 5: 2
 6: 6

 6 - 4 = 2
 get the max from row[0]
 go through each brick and add edges to the freq

 get the largest freq

 max - largest freq;

 */
 var leastBricks = function(wall) {
    const freq = {};
    let max = -Infinity;
    for (let row of wall) {
        let edge = 0;
        for (let i = 0; i < row.length-1; i++) {
            edge += row[i];
            freq[edge] = (freq[edge] || 0) + 1;
            max = Math.max(max, freq[edge]);
        }
    }
    return max === -Infinity ? wall.length : wall.length - max;
};