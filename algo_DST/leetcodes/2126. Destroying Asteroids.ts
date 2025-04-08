/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 4 4 9 23
 10 3 5 9 19 21
 27 + 19 = 46
 */
 var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a, b) => a - b);
    for (let num of asteroids) {
        if (mass < num) return false
        mass += num;
        if (mass >= 10**5) return true;
    }
    return true;
};