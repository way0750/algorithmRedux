/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 use sliding window to check and see if back can extend to k length
 if yes, then return arr[back];
 you might end up going all the way to the end
    ex: k-1 >= arr.length;

 */
    var getWinner = function(arr, k) {
        let curNum = arr[0];
        let wins = 0;
        for (let front = 1; front < arr.length; front++) {
            if (arr[front] > curNum) {
                curNum = arr[front];
                wins = 0
            }
            wins++;
            if (wins === k) return curNum;
        }
        return curNum;
    };