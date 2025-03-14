/**
 * @param {number[]} matchsticks
 * @return {boolean}
 the longest one will dictate
    but you can still add to it
sum all of it up and divisble by 4?
    still doesn't matter because you can't break sticks
but can check if stick count is < 4
    return false
must have 4 groups
set size to sum / 4
sort the input
    work on the larger numbers first since they are the most restrictive
 */
    var makesquare = function(matchsticks) {
        const sum = matchsticks.reduce((sum, num) => sum + num, 0);
        if (matchsticks.length < 4 || sum % 4 !== 0) return false;
        matchsticks.sort((a, b) => b - a);
        const sides = Array(4).fill(0);
        const targetLength = sum / 4;
    
        const dfs = (index) => {
            if (index === matchsticks.length) {
                return sides[0] === sides[1] && sides[1] === sides[2] &&
                sides[2] === sides[3];
            }
            const curStick = matchsticks[index];
            for (let i = 0; i < 4; i++) {
                if (sides[i] + curStick > targetLength) continue;
                sides[i] += curStick;
                if (dfs(index + 1)) return true;
                sides[i] -= curStick;
                if (sides[i] === 0) break;
            }
            return false;
        }
    
        return dfs(0);
    };