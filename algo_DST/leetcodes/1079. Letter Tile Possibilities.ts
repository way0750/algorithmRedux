/**
 * @param {string} tiles
 * @return {number}
 AAAAA
 AAAA
 AAA
 AA
 A


 */
 var numTilePossibilities = function(tiles) {
    const freq = {};
    for (let tile of tiles) {
        freq[tile] = (freq[tile] || 0) + 1;
    }
    const uniqChars = Object.keys(freq);
    const dfs = () => {
        // each when making the decision to use a frequency
        // that's one pattern
        let count = 0
        for (let char of uniqChars) {
            if (!freq[char]) continue;
            freq[char]--;
            count += (1 + dfs());
            freq[char]++;
            // when moving onto the next uniqChar
            // that means not using current uniqChar
        }

        return count;
    }
    return dfs();
};