/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 [[1,3],[3,3],[5,3],[2,2]]
 1,3; 2,2; 3,3; 5,3
 */
var countPoints = function(points, queries) {
    return queries.map(([queryX, queryY, queryR]) => {
        let count = 0;
        points.forEach(([pointX, pointY]) => {
            const length = Math.abs(queryX - pointX);
            const height = Math.abs(queryY - pointY);
            const slope = Math.sqrt(length**2 + height**2);
            if (slope <= queryR) count++;
        });
        return count;
    });
};
