/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}

  1 2 3 4 5 6 7
  2 2 5 5 3 3 3

  do line sweep?
  1 2 3 4 5 6 7
  2      -2
      3      -3
  2   3  -2  -3
0 2   5   3   0

go through each trip
    and add to hash table:
        {posStart: +people count, posEnd: -peopleCount}
then go through all the pos in sorted manner
    and do math to sum += pos's people count
    whenever the sum > capacity return false
default return true;
time: O(trips.length)
space: O(trips.length)

 */
var carPooling = function(trips, capacity) {
    const record = {};
    for (let [people, from, to] of trips) {
        record[from] = (record[from] || 0) + people;
        record[to] = (record[to] || 0) - people;
    }
    const pos = Object.keys(record).map((n) => +n).sort((a, b) => a-b);
    let sum = 0;
    for (let point of pos) {
        sum += record[point];
        if (sum > capacity) return false;
    }
    return true;
};
