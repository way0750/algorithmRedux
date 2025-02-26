/**
 * You are given a list of bombs. The range of a bomb is defined as the area where its effect can be felt. This area is in the shape of a circle with the center as the location of the bomb.

The bombs are represented by a 0-indexed 2D integer array bombs where bombs[i] = [xi, yi, ri]. xi and yi denote the X-coordinate and Y-coordinate of the location of the ith bomb, whereas ri denotes the radius of its range.

You may choose to detonate a single bomb. When a bomb is detonated, it will detonate all bombs that lie in its range. These bombs will further detonate the bombs that lie in their ranges.

Given the list of bombs, return the maximum number of bombs that can be detonated if you are allowed to detonate only one bomb.

 

Example 1:


Input: bombs = [[2,1,3],[6,1,4]]
Output: 2
Explanation:
The above figure shows the positions and ranges of the 2 bombs.
If we detonate the left bomb, the right bomb will not be affected.
But if we detonate the right bomb, both bombs will be detonated.
So the maximum bombs that can be detonated is max(1, 2) = 2.
Example 2:


Input: bombs = [[1,1,5],[10,10,5]]
Output: 1
Explanation:
Detonating either bomb will not detonate the other bomb, so the maximum number of bombs that can be detonated is 1.
Example 3:


Input: bombs = [[1,2,3],[2,3,1],[3,4,2],[4,5,3],[5,6,4]]
Output: 5
Explanation:
The best bomb to detonate is bomb 0 because:
- Bomb 0 detonates bombs 1 and 2. The red circle denotes the range of bomb 0.
- Bomb 2 detonates bomb 3. The blue circle denotes the range of bomb 2.
- Bomb 3 detonates bomb 4. The green circle denotes the range of bomb 3.
Thus all 5 bombs are detonated.
 

Constraints:

1 <= bombs.length <= 100
bombs[i].length == 3
1 <= xi, yi, ri <= 105

 */

/**
 * @param {number[][]} bombs
 * @return {number}
get the slope = squareRoot(x**2 + y**2)
    if slope <= r, it's connected
if we are to make a graph by going through all nodes and to connect all if possible
    it's gonna be n**2 of run time
    by going through each node against the rest
    it could be that A->B but B is not connected to A
once done
    do a depth first search node by node
        and see who blows up the most bombs
 */
        var maximumDetonation = function(bombs) {
            const graph = Array(bombs.length) // [ith ith ith [] [] []]
            for (let i = 0; i < bombs.length; i++) {
                const [x, y, r] = bombs[i];
                graph[i] = graph[i] || [];
                // now go through the rest of the bombs to see if current node connects to any
                for (let j = 0; j < bombs.length; j++) {
                    if (j === i) continue;
                    const [xx, yy] = bombs[j];
                    const xDiff = Math.abs(x - xx);
                    const yDiff = Math.abs(y - yy);
                    const slop = Math.sqrt(xDiff**2 + yDiff**2);
                    if (slop <= r) graph[i].push(j);
                }
            }
            const dfs = (bombI, visited) => {
                if (visited.has(bombI)) return;
                visited.add(bombI);
                const neighbors = graph[bombI];
                for (let i = 0; i < neighbors.length; i++) dfs(neighbors[i], visited);
            }
            let max = 0;
            for (let bombI = 0; bombI < graph.length; bombI++) {
                const visited = new Set();
                dfs(bombI, visited);
                max = Math.max(max, visited.size);
            }
        
            return max;
        };