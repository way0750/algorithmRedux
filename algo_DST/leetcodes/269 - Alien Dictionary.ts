/**
 * 269 - Alien Dictionary
Posted on August 25, 2016
11 minute read
Welcome to Subscribe On Youtube

Question
Formatted question description: https://leetcode.ca/all/269.html

There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.

Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

 

Example 1:

Input: words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"
Example 2:

Input: words = ["z","x"]
Output: "zx"
Example 3:

Input: words = ["z","x","z"]
Output: ""
Explanation: The order is invalid, so return "".
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of only lowercase English letters.



Input: words = ["wrt","wrf","er","ett","rftt"]
     e-----
     V    V
w -> r -> t
     V    ^
     f-----


werft
make graph
    wrt means w -> r -> t
then do topological search
add pathSearched and graphSearched
set sorted = []
time: O(words.length * words[maxLength].length + unique chars)
spacel: O(unique chars)
 */

export const makeGraph = (words) => {
    const graph = {} // { char: [neighbots...] }
    for (let i = 0; i < words.length; i++) {
        const curWord = words[i];
        const nextWord = words[i+1] || '';
        let index = 0;
        while (curWord[index] === nextWord[index]) index++;
        if (curWord[index] && nextWord[index]) {
            const char = curWord[index];
            graph[char] = graph[char] || {};

            const nextChar = nextWord[index];
            graph[nextChar] = graph[nextChar] || {};

            graph[char][nextChar] = nextChar;
        }
    }

    return graph;
}

const makeDictionary = (words) => {
    const graph = makeGraph(words);
    const ans = [];
    const graphVisited = new Set();

    const dfs = (char, pathVisited) => {
        if (pathVisited.has(char)) return false;
        if (graphVisited.has(char)) return true;
        pathVisited.add(char);
        graphVisited.add(char);
        for (let neighbor in graph[char]) {
            if (dfs(neighbor, pathVisited) === false) return false;
        }
        ans.unshift(char);
        pathVisited.delete(char);
        return true;
    };
    for (let char in graph) {
        // if return is false, then that means there is a cycle
        dfs(char, new Set());
    }

    return ans.join('');
}