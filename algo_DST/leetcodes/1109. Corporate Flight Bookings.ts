/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 use line sweep
 */
 var corpFlightBookings = function(bookings, n) {
    const line = Array(n+1).fill(0);
    for (let [start, end, seats] of bookings) {
        line[start-1] += seats;
        line[end] -= seats;
    }
    line.pop();
    for (let i = 1; i < n; i++) {
        line[i] += line[i-1];
    }
    return line;
};