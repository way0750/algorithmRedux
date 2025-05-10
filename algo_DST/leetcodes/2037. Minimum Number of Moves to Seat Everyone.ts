/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 2 4 7
 1 3 5
 1 1 2

 3 1 5
 2 7 4


 1 2 3 6
 1 4 5 9
 0 2 2 3
 */
 var minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => a-b);
    students.sort((a, b) => a-b);
    let sum = 0;
    for (let i = 0; i < seats.length; i++) {
        sum += Math.abs(seats[i] - students[i]);
    }
    return sum;
};