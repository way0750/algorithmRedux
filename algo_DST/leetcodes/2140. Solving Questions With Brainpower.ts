/**
 * @param {number[][]} questions
 * @return {number}
 [[3,2],[4,3],[4,4],[2,5],[100,3]]
 [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8]]

[[1,1],[2,2],[3,3],[4,4],[5,5]]

for each index:
    compare self + jump vs not using self but next index
 */
    var mostPoints = function(questions) {
        const dp = Array(questions.length).fill(0);
        for (let i = questions.length-1; i > -1; i--) {
            const [point, jump] = questions[i];
            const use = point + (dp[i + jump + 1] || 0);
            const notUse = dp[i+1] || 0;
            dp[i] = Math.max(use, notUse);
        }
        return dp[0];
    };
    