/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 1 2 3 4
 2 2 3 3
   2 2 1
 4
 6
 4
 14

 */
var wateringPlants = function(plants, capacity) {
    let running = 0;
    let ans = 0;
    let i = 0
    for (; i < plants.length; i++) {
        running += plants[i];
        if (running > capacity) {
            ans += i * 2;
            running = plants[i];
        }
    }
    return ans + i;
};
