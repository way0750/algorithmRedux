/**
 * @param {number[][]} intervals
 * @return {number[]}
 sort intervals copy by starting time
    then do binary search
 */
    var findRightInterval = function(intervals) {
        const indexed = intervals
            .map(([start], index) => ({start, index}))
            .sort((a, b) => a.start - b.start);
        // do binary search:
        // find the smallest obj in which start is >= target.start
        const bSearch = (target) => {
            let left = 0;
            let right = indexed.length;
            let ans = -1;
            while (left < right) {
                const mid = left + Math.floor((right-left) / 2);
                if (indexed[mid].start >= target) {
                    ans = indexed[mid].index;
                    right = mid;
                } else {
                    left = mid+1;
                }
            }
            return ans;
        };
        return intervals.map(([start, end]) => bSearch(end));
    };