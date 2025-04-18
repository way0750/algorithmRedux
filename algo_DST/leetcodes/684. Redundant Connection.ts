/**
 * @param {number[][]} edges
 * @return {number[]}
 returning the last one, if there is a cycle
    you will find it at the end anyway
 so just keep on adding edges to the group
    eventually you will loop to the later edges in the input
        and find the cycle
        in which case, return that input


1 -> 5, 6 -> 8, 5 -> 6
1 5 6 8


1 -> 5, 6 -> 8, 5 -> 6, 8 -> 1

if different parent, that means two groups are first met
if same parent, then means two groups are already joined earlier
    and because the graph is at first connected as a tree, so there won't be
        multiple cycles, there is only one, so return that one
 */
        var findRedundantConnection = function(edges) {
            const n = edges.length;
            const parents = Array(n+1).fill(null).map((_, index) => index);
            const getParent = (node) => {
                if (parents[node] !== node) {
                    parents[node] = getParent(parents[node]);
                }
                return parents[node];
            }
            const union = (node, target) => {
                const nodeParent = getParent(node);
                const targetParent = getParent(target);
                if (nodeParent === targetParent) return false;
                parents[targetParent] = nodeParent;
                return true;
            }
            for (let [node, target] of edges) {
                if (!union(node, target)) return [node, target];
            }
        };