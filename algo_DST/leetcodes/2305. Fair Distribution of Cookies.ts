/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}

 5, 7, 9
 but you should return 9

loop through each kid:
    option: current number to kid0.. kidk

 */
    var distributeCookies = function(cookies, k) {
        const sum = cookies.reduce((sum, n) => sum + n, 0);
        const ideal = sum / k;
        const kids = Array(k).fill(0);
        let min = Infinity; 
        // get the max count from the kids, then compare to min
        // if the max === ideal, just return it
        const dfs = (index) => {
            const curNum = cookies[index];
            if (index === cookies.length) {
                const curMax = Math.max(...kids);
                min = Math.min(min, curMax);
                return min === ideal;
            }
            for (let i = 0; i < k; i++) {
                if (kids[i] < ideal) {
                    kids[i] += curNum;
                    if (dfs(index+1)) return true;
                    kids[i] -= curNum;
                }
                if (kids[i] === 0) break;
            }
            return false;
        }
        dfs(0);
        return min;
    };
    